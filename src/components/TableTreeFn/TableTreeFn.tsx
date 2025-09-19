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
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';

const TableTreeFn = forwardRef<HTMLDivElement, TreeTableProps>(
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
      navigateTreeNode = null,
      handleRemoveNavigateTreeNode = () => {},
      scrollThreshold = 128, // this is the  Distance from edge to trigger the scroll below and above
    },
    ref
  ) => {
    const [expanding, setExpanding] = useState<string | null>(null);
    const [scrollDirection, setScrollDirection] = useState<
      'above' | 'below' | null
    >(null); // this state will help to idenetify the direction during the pagination api call
    const [prevScrollTop, setPrevScrollTop] = useState<number | null>(null);
    const [prevScrollHeight, setPrevScrollHeight] = useState<number | null>(
      null
    );
    const [maintainScrollPosition, setMaintainScrollPosition] = useState<
      number | null
    >(null);

    const containerRef = useRef<HTMLDivElement>(null);
    const previousTreeDataRef = useRef<TreeNodeProps[]>([]);
    const scrollPositionRef = useRef({
      lastScrollTop: 0,
      lastScrollTime: 0,
      direction: null as 'up' | 'down' | null,
    });
    const scrollDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(
      null
    );

    // this is  loadMore  functions which will the trigger the pagination apis in platform
    const loadMoreAbove = useCallback(() => {
      if (loading || scrollDirection === 'above') return;
      setScrollDirection('above');
      setPrevScrollTop(containerRef.current?.scrollTop ?? null);
      setPrevScrollHeight(containerRef.current?.scrollHeight ?? null);
      loadMore('above');
    }, [loading, scrollDirection, loadMore]);

    const loadMoreBelow = useCallback(() => {
      if (loading || scrollDirection === 'below') return;
      setScrollDirection('below');
      loadMore('below');
    }, [loading, scrollDirection, loadMore]);

    // this is  scroll handler
    const handleScroll = useCallback(() => {
      const container = containerRef.current;
      if (!container || checkEmpty(treeData)) return;

      const now = Date.now();
      const currentScrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;

      // Scroll direction calculation
      const direction =
        currentScrollTop > scrollPositionRef.current.lastScrollTop
          ? 'down'
          : 'up';

      scrollPositionRef.current = {
        lastScrollTop: currentScrollTop,
        lastScrollTime: now,
        direction,
      };

      // Cancel any previous debounce
      if (scrollDebounceRef.current) {
        clearTimeout(scrollDebounceRef.current);
      }
      // Infinite Scroll
      const nearBottom =
        scrollHeight - (currentScrollTop + clientHeight) < scrollThreshold;
      const nearTop = currentScrollTop < scrollThreshold;
      if (
        direction === 'down' &&
        nearBottom &&
        !loading &&
        !scrollDirection &&
        treeData[treeData.length - 1]?.lastResource !== true
      ) {
        scrollDebounceRef.current = setTimeout(() => {
          loadMoreBelow();
        }, 150);
      }

      if (
        direction === 'up' &&
        nearTop &&
        !loading &&
        !scrollDirection &&
        treeData[0]?.lastResource !== true
      ) {
        scrollDebounceRef.current = setTimeout(() => {
          loadMoreAbove();
        }, 150);
      }

      // Scroll Restoration After Loading Above
      if (
        !loading &&
        scrollDirection === 'above' &&
        previousTreeDataRef.current.length > 0 &&
        prevScrollTop !== null
      ) {
        const previousTreeData = previousTreeDataRef.current;
        let addedRowsCount = 0;

        for (let i = 0; i < treeData.length; i++) {
          if (previousTreeData[0] === treeData[i]) break;
          addedRowsCount++;
        }

        let retries = 0;
        const maxRetries = 30;
        // this function will try to restore the scroll position after loading more data specially when loading more data above
        const tryRestoreScroll = () => {
          const allRows = Array.from(
            container.querySelectorAll('.ff-table-tree-row')
          );

          let totalAddedHeight = 0;
          for (let i = 0; i < addedRowsCount; i++) {
            const height = allRows[i]?.getBoundingClientRect().height || 0;
            totalAddedHeight += height;
          }

          const canScroll = container.scrollHeight > container.clientHeight;
          const validHeights = totalAddedHeight > 0;

          if (validHeights && canScroll) {
            container.scrollTop = prevScrollTop + totalAddedHeight;
            previousTreeDataRef.current = treeData;
          } else if (retries < maxRetries) {
            retries++;
            requestAnimationFrame(tryRestoreScroll);
          } else {
            previousTreeDataRef.current = treeData;
            console.warn('Failed to restore scroll position after max retries');
          }
        };

        requestAnimationFrame(tryRestoreScroll);
      }
    }, [
      loading,
      scrollDirection,
      treeData,
      loadMoreAbove,
      loadMoreBelow,
      prevScrollTop,
      onScroll,
    ]);
    // Attach scroll event listener for updated first node when we scroll
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
    }, [onScroll]);
    useEffect(() => {
      return () => {
        if (scrollDebounceRef.current) {
          clearTimeout(scrollDebounceRef.current);
        }
      };
    }, []);
    // Handle scroll position restoration after loading
    useLayoutEffect(() => {
      if (
        !loading &&
        scrollDirection === 'above' &&
        prevScrollTop !== null &&
        prevScrollHeight !== null
      ) {
        const container = containerRef.current;
        if (!container) return;

        const scrollHeightDiff = container.scrollHeight - prevScrollHeight;
        if (scrollHeightDiff > 0) {
          container.scrollTop = prevScrollTop + scrollHeightDiff;
        }

        setScrollDirection(null);
        setPrevScrollTop(null);
        setPrevScrollHeight(null);
      } else if (!loading) {
        setScrollDirection(null);
      }
    }, [loading, scrollDirection, prevScrollTop, prevScrollHeight]);

    // Handle navigation to specific nodes
    useEffect(() => {
      if (navigateTreeNode) {
        const node = document.getElementById(navigateTreeNode);
        const container = containerRef.current;
        if (node && container) {
          // Store current scroll position
          setMaintainScrollPosition(container.scrollTop);

          // Calculate scroll position
          const nodeRect = node.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          const scrollTop = container.scrollTop;
          const nodeTop = nodeRect.top - containerRect.top + scrollTop;
          const containerHeight = containerRect.height;

          // Scroll to center the node
          container.scrollTo({
            top: nodeTop - containerHeight / 2 + nodeRect.height / 2,
            behavior: 'smooth',
          });
        }
      }
      return () => {
        handleRemoveNavigateTreeNode();
      };
    }, [navigateTreeNode, treeData]);

    // Restore scroll position after navigation
    useEffect(() => {
      if (maintainScrollPosition !== null && !loading && containerRef.current) {
        containerRef.current.scrollTop = maintainScrollPosition;
        setMaintainScrollPosition(null);
      }
    }, [maintainScrollPosition, loading]);

    // Setup scroll listener
    useEffect(() => {
      const container = containerRef.current;
      if (!container || !pagination) return;

      container.addEventListener('scroll', handleScroll);
      // Initial check in case we're already at the bottom/top
      handleScroll();

      return () => {
        container.removeEventListener('scroll', handleScroll);
        if (scrollDebounceRef.current) {
          clearTimeout(scrollDebounceRef.current);
        }
      };
    }, [handleScroll, pagination]);

    // Track previous tree data for scroll restoration
    useEffect(() => {
      if (treeData.length > 0) {
        previousTreeDataRef.current = treeData;
      }
    }, [treeData]);
    useEffect(() => {
      if (!loading && expanding) {
        setExpanding(null);
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
    // half visible, click on upward arrow functionality, page auto scrolling
    useEffect(() => {
      if (!newNode || !containerRef.current) return;
      const container = containerRef.current;
      if (
        newNode.action === 'addAbove' &&
        newNode.sourceId === treeData[0]?.key
      ) {
        container.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        newNode.action === 'addAbove' &&
        newNode.sourceId === newNode.firstNodeKey
      ) {
        const newScrollTop = container.scrollTop - 64;
        container.scrollTo({ top: newScrollTop, behavior: 'smooth' });
      }
    }, [newNode]);

    useLayoutEffect(() => {
      if (!navigateTreeNode) return;

      const container = containerRef.current;
      if (!container) return;

      let retryCount = 0;
      const maxRetries = 30;

      const scrollToNode = () => {
        const element = document.getElementById(navigateTreeNode);

        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            handleRemoveNavigateTreeNode();
          }, 200);
        } else {
          if (retryCount === 0 && treeData?.length > 1) {
            loadMoreAbove?.();
          }

          if (retryCount < maxRetries) {
            retryCount++;
            requestAnimationFrame(scrollToNode);
          } else {
            handleRemoveNavigateTreeNode();
          }
        }
      };
      scrollToNode();
    }, [navigateTreeNode, loadMoreAbove, handleRemoveNavigateTreeNode]);

    return (
      <div className="tree-table-wrapper-container">
        <div className="tree-table-wrap" ref={ref}>
          <div
            className={`table-scrollable ${
              treeData.length ? '' : 'table-empty'
            }`}
            ref={containerRef}
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
                scriptLengthTruncate={scriptLengthTruncate}
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
      </div>
    );
  }
);

export default TableTreeFn;
