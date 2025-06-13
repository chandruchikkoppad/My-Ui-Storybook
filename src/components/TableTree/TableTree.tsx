import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  forwardRef,
} from 'react';

import './TableTree.scss';
import type { TreeTableProps } from './types';
import TableHead from './Components/TableHead';
import TableBody from './Components/TableBody';
import { TreeNodeProps } from '../../ComponentProps/TreeNodeProps';
import { addLastChild } from './Utils/addLastChild';

const TreeTable = forwardRef<HTMLDivElement, TreeTableProps>(
  (
    {
      treeData,
      columnsData,
      selected = [],
      select = null,
      onChange,
      onClick,
      onExpand,
      loadMore = () => {},
      tableBorder,
      height = 'calc(100vh - 134px)',
      newNode,
      onAddConfirm = (_name) => {},
      onAddCancel = () => {},
      handleEditFieldError,
      loading = false,
      rootNode,
      getContentLength,
      pagination = true,
      selectedNode,
      tableHeaderBgColor = 'var(--border-color)',
      hideOnDisable = false,
      freezeColumns,
      scriptLengthTruncate = 25,
      addModuleInputWidth = 150,
      addModuleSelectWidth,
      onScroll,
      disableEditLabelConfirmIcon = false,
      transparentHeader = false,
    },
    ref
  ) => {
    const [expanding, setExpanding] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<'above' | 'below' | null>(null);

    const observerRef = useRef<IntersectionObserver | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null); // Reference for scroll container
    const [prevScrollTop, setPrevScrollTop] = useState<number | null>(null);
    const previousTreeDataRef = useRef([]);
    const loadMoreAboveRef = useRef(false);

    // Handle load more data for pagination
    const loadMoreAbove = () => {
      if (loading || isLoading === 'above') return;
      if (!loadMoreAboveRef.current) {
        loadMoreAboveRef.current = true;
        return;
      }
      setIsLoading('above');
      setPrevScrollTop(containerRef.current?.scrollTop ?? null);

      // Trigger the loadMore callback for data loading from above
      loadMore('above');
    };

    const loadMoreBelow = () => {
      if (loading || isLoading === 'below') return;
      setIsLoading('below');

      // Trigger the loadMore callback for data loading from below
      loadMore('below');
    };

    const handleScroll = useCallback(() => {
      const container = containerRef.current;
      if (!loading && container) {
        const currentScrollTop = container.scrollTop;

        const previousTreeData = previousTreeDataRef.current;

        if (previousTreeData.length > 0 && isLoading === 'above') {
          const allRows = Array.from(
            container.querySelectorAll('.ff-table-tree-row')
          );
          let addedRowsCount = 0;
          if (getContentLength) {
            addedRowsCount = getContentLength;
          } else {
            for (let i = 0; i < treeData.length; i++) {
              if (previousTreeData[0] === treeData[i]) break;
              addedRowsCount++;
            }
          }

          // Calculate the total height of the newly added rows
          const totalAddedHeight = treeData
            .slice(0, addedRowsCount - (currentScrollTop > 5 ? 2 : 0))
            .reduce((heightSum: number, _: any, index: number) => {
              const rowHeight =
                allRows[index]?.getBoundingClientRect().height || 0;
              return heightSum + rowHeight;
            }, 0);

          // Adjust scroll position when data is loaded above
          if (addedRowsCount) {
            container.scrollTop = prevScrollTop + totalAddedHeight;
          }
        }
        previousTreeDataRef.current = treeData;
      }
    }, [loading, isLoading, treeData]);

    useEffect(() => {
      const scrollContainer = document.getElementById(
        'ff-table-tree-scroll-container'
      );
      const lastNode = document.getElementById('ff-table-tree-last-node');
      const firstNode = document.getElementById('ff-table-tree-first-node');

      if (
        !scrollContainer ||
        !lastNode ||
        !firstNode ||
        !treeData?.length ||
        !pagination
      )
        return;

      const isLastResourceBelow = !!treeData[treeData.length - 1]?.lastResource;
      const isLastResourceAbove = !!treeData[0]?.lastResource;

      // Clean up old observer before creating a new one
      observerRef.current?.disconnect();
      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          const nodeId = entry.target.id;
          const direction =
            nodeId === 'ff-table-tree-last-node' ? 'below' : 'above';

          if (entry.isIntersecting) {
            if (direction === 'below' && !isLoading && !isLastResourceBelow) {
              loadMoreBelow();
            } else if (
              direction === 'above' &&
              !isLoading &&
              !isLastResourceAbove
            ) {
              loadMoreAbove();
            }
          }
        });
      };

      observerRef.current = new IntersectionObserver(observerCallback, {
        root: scrollContainer,
        rootMargin: '30px',
        threshold: 1,
      });

      if (!isLastResourceBelow) observerRef.current.observe(lastNode);
      if (!isLastResourceAbove) observerRef.current.observe(firstNode);

      if (previousTreeDataRef.current.length === 0) {
        previousTreeDataRef.current = treeData;
      }

      return () => {
        observerRef.current?.disconnect();
      };
    }, [treeData, loadMore, isLoading]);

    useLayoutEffect(() => {
      if (!loading && isLoading) {
        if (isLoading === 'above' && pagination) {
          handleScroll();
        } else {
          previousTreeDataRef.current = treeData;
        }
        setIsLoading(null);
      }
    }, [loading]);

    useEffect(() => {
      if (!loading && expanding) {
        setExpanding(null);
        previousTreeDataRef.current = treeData;
      }
    }, [loading]);
    const handleToggleExpand = useCallback(
      (node: TreeNodeProps) => {
        if (expanding) return;
        setExpanding(node.key);
        onExpand?.(node);
      },
      [onExpand, expanding]
    );

    useEffect(() => {
      const scrollDiv = containerRef.current;
      if (scrollDiv && onScroll) {
        scrollDiv.addEventListener('scroll', onScroll);
      }

      return () => {
        if (scrollDiv && onScroll) {
          scrollDiv.removeEventListener('scroll', onScroll);
        }
      };
    });

    const handleCheckBoxChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>, node: TreeNodeProps) => {
        if (expanding) return;
        onChange?.(e, node);
      },
      [onChange, expanding]
    );

    const handleRowClick = useCallback(
      (e: React.MouseEvent<HTMLTableRowElement>, node: TreeNodeProps) => {
        if (expanding) return;
        onClick?.(e, node);
      },
      [onClick, expanding]
    );
    const DEFAULT_COLUMN_WIDTH = 400;

    const calculateFrozenWidth = (
      columnData: { width?: string }[],
      freezeColumns: number
    ) => {
      return columnData
        .slice(0, freezeColumns)
        .reduce(
          (acc, col) =>
            acc + parseInt(col.width || `${DEFAULT_COLUMN_WIDTH}`, 10),
          0
        );
    };

    let frozenWidth;
    if (freezeColumns) {
      frozenWidth = calculateFrozenWidth(columnsData, freezeColumns);
    }

    return (
      <div className="tree-table-wrap" ref={ref}>
        <div
          className={`table-scrollable ${treeData.length ? '' : 'table-empty'}`}
          ref={containerRef} // Bind ref to the scrollable container
          id="ff-table-tree-scroll-container"
          style={
            {
              '--table-height': treeData.length ? height : 'auto',
              '--frozen-column-width': freezeColumns
                ? `${frozenWidth}px`
                : '0px',
              border: tableBorder,
            } as React.CSSProperties
          }
        >
          <table className="tree-table">
            <TableHead
              columnsData={columnsData}
              rootNode={rootNode}
              onCheckBoxChange={handleCheckBoxChange}
              selected={selected}
              selectedNode={selectedNode}
              tableHeaderBgColor={tableHeaderBgColor}
              hideOnDisable={hideOnDisable}
              transparentHeader={transparentHeader}
            />

            <TableBody
              flattenedTreeData={addLastChild(treeData)}
              rootNode={rootNode?.node}
              columnsData={columnsData}
              selected={selected}
              select={select}
              onRowClick={handleRowClick}
              onToggleExpand={handleToggleExpand}
              onCheckBoxChange={handleCheckBoxChange}
              newNode={newNode}
              onAddConfirm={onAddConfirm}
              onAddCancel={onAddCancel}
              handleEditFieldError={handleEditFieldError}
              expanding={expanding}
              selectedNode={selectedNode}
              hideOnDisable={hideOnDisable}
              scriptLengthTruncate={scriptLengthTruncate}
              addModuleInputWidth={addModuleInputWidth}
              addModuleSelectWidth={addModuleSelectWidth}
              disableEditLabelConfirmIcon={disableEditLabelConfirmIcon}
            />
          </table>
        </div>
      </div>
    );
  }
);

export default TreeTable;
