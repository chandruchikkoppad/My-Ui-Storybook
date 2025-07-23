import type { Meta, StoryObj } from '@storybook/react';
import TableTree from './TableTree';
import Button from '../Button';
import treeData from './data';
import Icon from '../Icon/Icon';
import './TableTreeStories.scss';
import React, { ReactNode, useState, useRef } from 'react';
import AddResourceButton from '../AddResourceButton/AddResourceButton';
import { TreeNodeProps } from '../../ComponentProps/TreeNodeProps';
import { handleTreeNodeSect } from '../../utils/handleTreeNodeSelect/handleTreeNodeSelect';
import type { RootNode } from './types.ts';
import { getTopVisibleNodeKey } from '../../Utils/getTopVisibleNodeKey/getTopVisibleNodeKey.ts';
const meta: Meta<typeof TableTree> = {
  title: 'Components/Table tree',
  component: TableTree,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof TableTree>;

const rootNode: RootNode = {
  node: { name: 'Project Name', key: 'PAG1098' },
  select: 'checkbox',
  actions: (row, treeRowRef) => [
    <AddResourceButton
      treeRowRef={treeRowRef}
      directionalArrow={[
        {
          direction: 'top',
          menuOptions: [
            {
              label: 'Module',
              value: 'add_module_top',
              icon: 'module_icon',
              disable: false,
            },
          ],
        },
        {
          direction: 'right',
          menuOptions: [
            {
              label: 'Sub Module',
              value: 'add_module_sibling',
              icon: 'module_icon',
              disable: false,
            },
            {
              label: 'Automation Script',
              value: 'add_Automation_script_sibling',
              icon: 'automation_testcase',
              disable: false,
            },
            {
              label: 'Manual Test Case',
              value: 'add_manual_test_case_sibling',
              icon: 'manual_testcase',
              disable: false,
            },
            {
              label: 'Pre / Post Condition',
              value: 'add_pre_post_condition_sibling',
              icon: 'pre_post_condition',
              disable: false,
            },
            {
              label: 'Authorization',
              value: 'add_authorization_sibling',
              icon: 'authorization_icon',
              disable: false,
            },
            {
              label: 'Data Provider',
              value: 'data_provider_sibling',
              icon: 'data_provider',
              disable: false,
            },
          ],
        },
        {
          direction: 'down',
          menuOptions: [
            {
              label: 'Sub Module',
              value: 'sub_module_down',
              icon: 'module_icon',
              disable: false,
            },
          ],
        },
      ]}
      onMenuOptionClick={(option: {
        label: string | ReactNode;
        value: any;
      }) => {
        alert(`Option clicked: ${option.label}, Value: ${option.value}`);
      }}
    />,
  ],
};
const rootNodeRadio: RootNode = {
  node: { name: 'Project Name', key: 'PAG1098' },
  select: 'radio',
  actions: () => [],
};

const colData = [
  {
    name: 'Script Name',
    accessor: 'name',
    width: '600px',
    isClickable: true,
    actions: (row, treeRowRef) => {
      return [
        <Icon hoverEffect name="file" />,
        <Icon hoverEffect name="manage_apps" />,
        <Icon hoverEffect name="dropzone_icon" />,
        <Icon hoverEffect name="more" />,
        <AddResourceButton
          treeRowRef={treeRowRef}
          directionalArrow={[
            {
              direction: 'top',
              menuOptions: [
                {
                  label: 'Module',
                  value: 'add_module_top',
                  icon: 'module_icon',
                  disable: false,
                },
              ],
            },
            {
              direction: 'right',
              menuOptions: [
                {
                  label: 'Sub Module',
                  value: 'add_module_sibling',
                  icon: 'module_icon',
                  disable: false,
                },
                {
                  label: 'Automation Script',
                  value: 'add_Automation_script_sibling',
                  icon: 'automation_testcase',
                  disable: false,
                },
                {
                  label: 'Manual Test Case',
                  value: 'add_manual_test_case_sibling',
                  icon: 'manual_testcase',
                  disable: false,
                },
                {
                  label: 'Pre / Post Condition',
                  value: 'add_pre_post_condition_sibling',
                  icon: 'pre_post_condition',
                  disable: false,
                },
                {
                  label: 'Authorization',
                  value: 'add_authorization_sibling',
                  icon: 'authorization_icon',
                  disable: false,
                },
                {
                  label: 'Data Provider',
                  value: 'data_provider_sibling',
                  icon: 'data_provider',
                  disable: false,
                },
              ],
            },
            {
              direction: 'down',
              menuOptions: [
                {
                  label: 'Sub Module',
                  value: 'sub_module_down',
                  icon: 'module_icon',
                  disable: false,
                },
              ],
            },
          ]}
          onMenuOptionClick={(option: {
            label: string | ReactNode;
            value: any;
          }) => {
            alert(`Option clicked: ${option.label}, Value: ${option.value}`);
          }}
        />,
      ];
    },
    isTree: true,
  },

  {
    name: 'Module Path',
    accessor: 'createdBy',
    width: '300px',
    isClickable: true,
  },

  {
    name: 'Module Path',
    accessor: 'createdBy',
    width: '200px',
    isClickable: true,
  },
  {
    name: 'Module Path',
    accessor: 'createdBy',
    width: '200px',
    isClickable: true,
  },
  {
    name: 'Module Path',
    accessor: 'createdBy',
    width: '200px',
    isClickable: true,
  },
  {
    name: 'Module Path',
    accessor: 'createdBy',
    width: '200px',
    isClickable: true,
  },
  {
    name: 'Module Path',
    accessor: 'createdBy',
    width: '200px',
    isClickable: true,
  },
  {
    name: 'Module Path',
    accessor: 'createdBy',
    width: '200px',
    isClickable: true,
  },
  { name: 'Created By', accessor: 'createdByUname', width: '200px' },
  {
    name: 'Script Count',
    accessor: 'createdBy',
    width: '200px',
  },
  {
    name: 'state',
    accessor: 'createdBy',
    width: '100px',
    cell: ({ value }) => {
      return (
        value && (
          <Button
            variant="secondary"
            onClick={() => {
              console.log('====', value); //Todo:need to remove
            }}
          >
            {value}
          </Button>
        )
      );
    },
  },
];

export const Default: Story = {
  args: {
    loadMore: (node) => {
      console.log(node);
    },
    onExpand: (node) => {
      console.log(node);
    },
    select: 'checkbox',
    onChange: (node: string[]) => {
      console.log('-------------------', node);
    },
    selected: ['MOD1102'],
    treeData,
    columnsData: colData,
    onClick: (e, data) => {
      console.log('🚀 ~ e, data:', e, data); //Todo:need to remove
    },
    // height: 100,
  },
};

export const ControlledCheckBox: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    const [controlledTreeData, setControlledTreeData] =
      useState<TreeNodeProps[]>(treeData);

    const handleCheck = (e, node) => {
      const updatedTree = handleTreeNodeSect(
        controlledTreeData,
        node.key,
        null,
        e.target.checked
      );
      console.log('🚀 ~ handleCheck ~ updatedTree:', updatedTree);
      setControlledTreeData([...(updatedTree as any)]);
    };
    const handleCustomError = (inputValue: string) => {
      if (!inputValue) {
        return 'Text is required';
      }
      if (inputValue.length < 3) {
        return 'Please enter at least 3 characters.';
      }
      return '';
    };

    return (
      <TableTree
        height={'200px'}
        onExpand={(node) => {
          setControlledTreeData((prevData) => {
            const cloneTreeData = JSON.parse(JSON.stringify(prevData));
            const toggleNodeExpandedByKey = (tree, key) => {
              if (!tree) return tree;
              for (let i = 0; i < tree.length; i++) {
                if (tree[i].key === key) {
                  tree[i].expanded = !(tree[i].expanded ?? false);
                  return tree;
                }
                if (tree[i].children) {
                  toggleNodeExpandedByKey(tree[i].children, key);
                }
              }
              return tree;
            };

            return toggleNodeExpandedByKey(cloneTreeData, node.key);
          });
          console.log(node);
        }}
        select="checkbox"
        onChange={handleCheck}
        selected={selected}
        treeData={controlledTreeData}
        columnsData={colData}
        onClick={(e, data) => {
          console.log('🚀 ~ e, data:', e, data); //Todo:need to remove
        }}
        loadMore={(direction) => {
          console.log(direction, '-------------------');
        }}
        tableBorder="1px solid #f1f1f1"
        rootNode={rootNode}
        handleEditFieldError={handleCustomError}
        freezeColumns={1}
      />
    );
  },
};
export const ControlledRadio: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    return (
      <TableTree
        onExpand={(node) => {
          console.log(node);
        }}
        select="radio"
        onChange={(e, node: TreeNodeProps) => {
          setSelected([node.key]);
        }}
        selected={selected}
        treeData={treeData}
        columnsData={colData}
        onClick={(e, data) => {
          console.log('🚀 ~ e, data:', e, data); //Todo:need to remove
        }}
        rootNode={rootNodeRadio}
      />
    );
  },
};
export const EmptyTree: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    return (
      <TableTree
        onExpand={(node) => {
          console.log(node);
        }}
        select="checkbox"
        onChange={(e, node: TreeNodeProps) => {
          setSelected([node.key]);
        }}
        selected={selected}
        treeData={[]}
        columnsData={colData}
        onClick={(e, data) => {
          console.log('🚀 ~ e, data:', e, data); //Todo:need to remove
        }}
        rootNode={rootNode}
      />
    );
  },
};
export const GetTopNode: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    const treeTableRef = useRef<HTMLDivElement>(null);

    const handleGetTopVisible = () => {
      const key = getTopVisibleNodeKey(treeTableRef.current!, treeData);
      alert(`Top visible key: ${key}`);
    };
    return (
      <>
        <TableTree
          ref={treeTableRef}
          select="checkbox"
          onChange={(e, node: TreeNodeProps) => {
            setSelected([node.key]);
          }}
          selected={selected}
          treeData={treeData}
          columnsData={colData}
          rootNode={rootNode}
          height="400px"
        />

        <Button variant="secondary" onClick={handleGetTopVisible}>
          Get Top Node Key
        </Button>
      </>
    );
  },
};

export default meta;
