import type { Meta, StoryObj } from '@storybook/react';
import AppHeader from './AppHeader';
import {
  appHeaderMenuItemProps,
  appHeaderSubMenuItemProps,
  appHeaderQuickMenuItemProps,
  appHeaderHiddenMenuItemProps,
} from './types';
import Icon from '../Icon';
import React, { useState } from 'react';
import { optionsType } from '../AllProjectsDropdown/types';

const meta: Meta<typeof AppHeader> = {
  title: 'Components/AppHeader',
  component: AppHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof AppHeader>;
const defaultArgs = {
  logoIconName: 'fireflink_icon',
  rightContent: (
    <div>
      <Icon name="logo" />
    </div>
  ),
};
const projectList = [
  {
    label: 'All Projects',
    value: 'All Projects',
    iconName: 'all_projects',
  },
  {
    label: 'test',
    value: 'test',
    iconName: 'web_icon',
  },
  {
    label:
      'Pantaloon Project Pantaloon Web Project Pantaloon Web Project Pantaloon Web Project Pantaloon Web Project',
    value:
      'Pantaloon Web Project Pantaloon Web Project Pantaloon Web Project Pantaloon Web Project',
    iconName: 'web_icon',
  },
  {
    label: 'Mobile Project',
    value: 'Mobile Project',
    iconName: 'mobile_icon',
  },
  {
    label: 'Web & Mobile Project',
    value: 'Web & Mobile Project',
    iconName: 'web&mobile_icon',
  },
  {
    label: 'Sales Force',
    value: 'Sales Force',
    iconName: 'sales_force',
  },
  {
    label: 'MS Dynamic',
    value: 'MS Dynamic',
    iconName: 'ms_dynamic',
  },
  {
    label: 'Test',
    value: 'test',
    iconName: 'mobile_icon',
  },
  {
    label: 'Web Service',
    value: 'Web Service',
    iconName: '',
  },
];
const headerMenuItems = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    subMenuItems: [
      {
        label: 'Dashboard',
        path: '',
      },
      {
        label: 'Analytics',
        path: '',
      },
    ],
  },
  {
    label: 'Repo',
    path: '/repository/elements',
    subMenuItems: [
      {
        label: 'Elements',
        path: '/repository/elements',
        disable: true,
        disableText: 'Enable from extensions to test disable sub-menu item',
      },
      {
        label: 'Program Elements',
        path: '/repository/program-elements',
      },
      {
        label: 'Step Groups',
        path: '/repository/step-group',

        quickMenuItems: [
          { label: 'Elements', path: '#elements', iconName: 'element' },
          {
            label: 'Project Elements',
            path: '#project-element',
            iconName: 'project_element',
          },
          { label: 'Test Data', path: '#test-data', iconName: 'test_data' },
          { label: 'Variables', path: '#variable', iconName: 'variable' },
          { label: 'Parameters', path: '#parameters', iconName: 'parameters' },
          {
            label: 'Data Provider',
            path: '#data-provider',
            iconName: 'data_provider',
          },
          {
            label: 'Web Service',
            path: '#web-service',
            iconName: 'web_service_icon',
          },
        ],
      },
    ],
  },
  {
    label: 'Test Data',
    path: '/test-data',
  },
  {
    label: 'Test Dev',
    path: '/test-dev/scripts',
    subMenuItems: [
      {
        label: 'Scripts',
        path: '/test-dev/scripts',

        quickMenuItems: [
          { label: 'Elements', path: '#elements', iconName: 'element' },
          {
            label: 'Project Elements',
            path: '#project-element',
            iconName: 'project_element',
          },
          { label: 'Step Groups', path: '#step-group', iconName: 'step_group' },
          { label: 'Test Data', path: '#test-data', iconName: 'test_data' },
          { label: 'Variables', path: '#variable', iconName: 'variable' },
          {
            label: 'Pre-post Conditions',
            path: '#pre-post-conditions',
            iconName: 'pre_post_condition',
          },
          {
            label: 'Data Provider',
            path: '#data-provider',
            iconName: 'data_provider',
          },
          {
            label: 'Depends on script',
            path: '#depends-on-script',
            iconName: 'depends_on_script',
          },
          {
            label: 'Web Service',
            path: '#web-service',
            iconName: 'web_service_icon',
          },
          {
            label: 'Authorization',
            path: '#authorization',
            iconName: 'authorization_icon',
          },
        ],
      },
      {
        label: 'Executions',
        path: '/test-dev/execution-dashboard',
      },
    ],
  },
  {
    label: 'Suites',
    path: '/suites/suites',
    subMenuItems: [
      {
        label: 'Suites',
        path: '/suites/suites',

        quickMenuItems: [
          {
            label: 'Test Data Set',
            path: '#test-data-set',
            iconName: 'test_data_set',
          },
          {
            label: 'Variable Set',
            path: '#variable-set',
            iconName: 'variable_set',
          },
          {
            label: 'Email Group',
            path: '#email-group',
            iconName: 'email_group',
          },
          { label: 'Labels', path: '#labels', iconName: 'label_icon' },
        ],
      },
      {
        label: 'Scheduled Executions',
        path: '',
      },
    ],
  },
  {
    label: 'Web Service',
    path: '/webservice/restapi',
    subMenuItems: [
      {
        label: 'Rest API',
        path: '/webservice/restapi',
        quickMenuItems: [
          { label: 'Variables', path: '#variable', iconName: 'variable' },
          { label: 'History', path: '#history', iconName: 'history' },
        ],
      },
      {
        label: 'Snippets',
        path: '/webservice/snippets',
      },
      {
        label: 'Executions',
        path: '/webservice/executions',
      },
    ],
  },
  {
    label: 'Defects',
    path: '/defects',
  },
  {
    label: 'Configuration',
    path: '/configuration',
    subMenuItems: [
      {
        label: 'Environment Config.',
        path: '',
      },
      {
        label: 'Execution Config.',
        path: '',
      },
      {
        label: 'User Management',
        path: '',
      },
      {
        label: 'Templates',
        path: '',
      },
    ],
  },
  {
    label: 'Approval Request',
    path: '/approval-request',
    subMenuItems: [
      {
        label: 'Scripts',
        path: '',

        quickMenuItems: [
          { label: 'Variables', path: '#variable', iconName: 'variable' },
          {
            label: 'Data Provider',
            path: '#data-provider',
            iconName: 'data_provider',
          },
          {
            label: 'Depends on script',
            path: '#depends-on-script',
            iconName: 'depends_on_script',
          },
          {
            label: 'Web Service',
            path: '#web-service',
            iconName: 'web_service_icon',
          },
        ],
      },
      {
        label: 'Elements',
        path: '',
      },
      {
        label: 'Step Groups',
        path: '',

        quickMenuItems: [
          { label: 'Parameters', path: '#parameters', iconName: 'parameters' },
          { label: 'Variables', path: '#variable', iconName: 'variable' },
          {
            label: 'Data Provider',
            path: '#data-provider',
            iconName: 'data_provider',
          },
          {
            label: 'Web Service',
            path: '#web-service',
            iconName: 'web_service_icon',
          },
        ],
      },
      {
        label: 'Variables',
        path: '',
      },
    ],
  },
];

const headerRightSideContent = (
  <div>
    <Icon name="logo" />
  </div>
);

// export const SampleAppHeader: Story = {
//   args: {
//     ...defaultArgs,
//     rightContent: (
//       <div>
//         <Icon name="logo" />
//       </div>
//     ),
//     appHeaderMenuItems: headerMenuItems,
//     selectedMenu: 'Repo',
//   },
// };
export const Controlled: Story = {
  render: () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState('All Projects');
    const [selectedSubMenuItem, setSelectedSubMenuItem] = useState('');
    const [selectedQuickMenuItem, setSelectedQuickMenuItem] = useState('');
    const [selectedHiddenMenuItems, setSelectedHiddenMenuItems] = useState<
      appHeaderHiddenMenuItemProps[]
    >([]);
    const [selectedProject, setSelectedProject] = useState({
      label: 'All Projects',
      value: 'All Projects',
      iconName: 'all_projects',
    });
    const handleMenuClick = (item: appHeaderMenuItemProps) => {
      setSelectedMenuItem(item.label);
    };

    const handleSubMenuClick = (item: appHeaderSubMenuItemProps) => {
      setSelectedSubMenuItem(item.label);
      const selectedMainMenu = headerMenuItems.find(
        (menu) => menu.label === selectedMenuItem
      );

      if (selectedMainMenu?.subMenuItems) {
        const selectedSubMenu = selectedMainMenu.subMenuItems.find(
          (subMenu) => subMenu.label === item.label
        ) as appHeaderSubMenuItemProps;
        let hiddenMenuArray: appHeaderHiddenMenuItemProps[] = [];
        if (selectedSubMenu?.hiddenMenuItems) {
          hiddenMenuArray = selectedSubMenu.hiddenMenuItems;
        }
        setSelectedHiddenMenuItems(hiddenMenuArray);
      }
    };

    const handleQuickMenuClick = (item: appHeaderQuickMenuItemProps) => {
      setSelectedQuickMenuItem(item.iconName);
    };
    const handleProjectClick = (item: optionsType) => {
      setSelectedProject(item);
    };
    const handleProjectDropdownLabelClick = () => {
      setSelectedMenuItem('All Projects');
    };

    return (
      <>
        <div>
          <AppHeader
            width="1120px"
            borderRadius="8px"
            logo={<Icon name="fireflink_icon" height={24} width={21} />}
            leftContent={headerRightSideContent}
            rightContent={headerRightSideContent}
            appHeaderMenuItems={headerMenuItems}
            appHeaderHiddenMenuItems={selectedHiddenMenuItems}
            projectsList={projectList}
            selectedMenu={selectedMenuItem}
            selectedSubMenu={selectedSubMenuItem}
            selectedQuickMenu={selectedQuickMenuItem}
            selectedProject={selectedProject}
            onMenuClick={handleMenuClick}
            onSubMenuClick={handleSubMenuClick}
            onQuickMenuClick={handleQuickMenuClick}
            onProjectMenuClick={handleProjectClick}
            onProjectDropdownLabelClick={handleProjectDropdownLabelClick}
            // disabled
          />
        </div>
      </>
    );
  },
};


export const SampleAppHeader: Story = {
  args: {
    ...defaultArgs,
    appHeaderMenuItems:[],
    selectedMenu: 'Repo',
    centerInfoItems: [
      { iconName: "chrome_icon", label: "Chrome" },
      { iconName: "mac_white_icon", label: "Mac OS Sequoia" },
      { iconName: "maximize_livetesting", label: "1440x900" },
    ],
    rightButtons: [
  { iconName: "timer_icon", label: "03:32", color: "var(--primary-button-text-color)", backgroundColor:"var(--status-rejected-text-color)",  onClick: () => alert("Timer clicked!"), },
  { label: "Upgrade", color: "var(--click-able-text-color)", backgroundColor: "white",onClick: () => alert("Upgrade clicked"),},
  { label: "End Session", color: "var(--primary-button-text-color)", backgroundColor: "var(--status-rejected-text-color)",onClick: () => alert("End Session clicked"), },
],
    rightContent:(<></>)
  },
};

export default meta;
