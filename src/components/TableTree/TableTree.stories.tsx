import type { Meta, StoryObj } from '@storybook/react';
import TableTree from './TableTree';
import Button from '../Button';
import treeData from './data';
import Typography from '../Typography/Typography';
import Icon from '../Icon/Icon';
import Chip from '../Chip/Chip';
import './TableTreeStories.scss';

const meta: Meta<typeof TableTree> = {
  title: 'Components/Table tree',
  component: TableTree,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof TableTree>;

// NOTE :: For Action section use ff-action-section classname

// TODO :: below code is a temporary will Modify later

const createTilteAndAction = (row: any): JSX.Element => {
  if (row?.folder) {
    return (
      <div className="ff-parent-node-section">
        <div className="ff-folder-name-style">
          <Typography fontWeight="semi-bold">{`${row?.title} - Action Folder lenthy name`}</Typography>
        </div>

        <Chip
          fullText={`Sub Modules ${row?.scriptCount}`}
          label={`SM ${row?.subModuleCount}`}
          variant="primary"
        />
        <Chip
          fullText={`Scripts Count ${row?.scriptCount}`}
          label={`SC ${row?.scriptCount}`}
          variant="primary"
        />
        <div className="ff-action-section">
          <div className="ff-action-menu">
            <Icon hoverEffect name="logo" />
            <Icon hoverEffect name="sun_icon" />
            <Icon hoverEffect name="more" />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ff-parent-node-section">
        <div className="ff-file-name-style">
          <Typography>{`${row.title} - Action File with lenthy name`}</Typography>
        </div>
        <div className="ff-action-section">
          <div className="ff-action-menu">
            <Icon hoverEffect name="file" />
            <Icon hoverEffect name="manage_apps" />
            <Icon hoverEffect name="dropzone_icon" />
            <Icon hoverEffect name="more" />
          </div>
        </div>
      </div>
    );
  }
};

export const Default: Story = {
  args: {
    withCheckBox: false,
    treeData,
    columnsData: [
      {
        name: 'Script Name',
        accessor: 'title',
        width: '400px',
        isClickable: true,
        cell: (e) => {
          return createTilteAndAction(e.row);
        },
      },

      {
        name: 'Module Path',
        accessor: 'path',
        width: '200px',
        isClickable: true,
      },
      { name: 'Created By', accessor: 'createdByUname', width: '200px' },
      {
        name: 'Script Count',
        accessor: 'moduleLevelScriptCount',
        width: '200px',
      },
      {
        name: 'state',
        accessor: 'state',
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
    ],
    onClick: (e, data) => {
      console.log('🚀 ~ e, data:', e, data); //Todo:need to remove
    },
  },
};

export default meta;
