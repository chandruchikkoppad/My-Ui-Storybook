import Typography from '../Typography';
import Select from './../Select/Select';
import { StateDropdownProps } from './StateDropdownTypes';
import './StateDropdown.scss';

const StateDropdown = ({
  value,
  isReviewer = false,
  isApprovePage = false,
  handleStateValueClick,
  handleDropdownOptionsClick,
  disabled = false,
  isOnlyReviewer = false,
  showBorder = false,
  zIndex = 200,
}: StateDropdownProps) => {
  const currentState = value.toUpperCase();

  const isReviewerAndClickedOnReviewState: boolean =
    isReviewer && !isApprovePage && currentState === 'REVIEW';

  //TODO Get proper name from API to dispaly in UI
  const getOptions = () => {
    if (isOnlyReviewer && !isApprovePage) {
      return [
        { label: 'New', value: 'New' },
        { label: 'Approve', value: 'Approve' },
      ];
    }
    if (!isReviewer && !isApprovePage) {
      return [
        {
          label: currentState === 'REJECTED' ? 'Rejected' : 'New',
          value: currentState === 'REJECTED' ? 'Rejected' : 'New',
        },
        { label: 'Review', value: 'Review' },
      ];
    }
    if (isReviewer && !isApprovePage && currentState !== 'REVIEW') {
      return [
        {
          label: currentState === 'REJECTED' ? 'Rejected' : 'New',
          value: currentState === 'REJECTED' ? 'Rejected' : 'New',
        },
        { label: 'Review', value: 'Review' },
        { label: 'Approve', value: 'Approve' },
      ];
    }
    if (isReviewer && isApprovePage) {
      return [
        { label: 'Review', value: 'Review' },
        { label: 'Approve', value: 'Approve' },
        { label: 'Reject', value: 'Reject' },
      ];
    }
    if (isReviewerAndClickedOnReviewState) {
      return [
        {
          label: 'Review',
          value: 'Review',
        },
        {
          label: 'Approve',
          value: 'Approve',
        },
      ];
    }
    return [
      { label: 'New', value: 'New' },
      { label: 'Review', value: 'Review' },
    ];
  };

  const options = getOptions();

  const selectedOption = { label: value, value };

  const showSelect =
    (currentState === 'NEW' && !isApprovePage) ||
    (isApprovePage && currentState === 'REVIEW') ||
    isReviewerAndClickedOnReviewState ||
    (currentState === 'REJECTED' && !isApprovePage);

  const content =
    showSelect && !disabled ? (
      <Select
        label={value}
        onChange={(option) => handleDropdownOptionsClick(option)}
        optionsList={options}
        selectedOption={selectedOption}
        showLabel={false}
        showBorder={showBorder}
        disableInput={true}
        selectedOptionColor="var(--brand-color)"
        optionZIndex={zIndex}
        background="var(--state-dropdown-bg-color)"
        borderRadius="4px"
        width="96px"
        height={20}
      />
    ) : (
      <Typography
        children={value}
        className="ff-state-value"
        onClick={() => {
          if (
            value.toLowerCase() === 'review' &&
            !disabled &&
            !isApprovePage &&
            !isReviewer
          ) {
            handleStateValueClick();
          }
        }}
        cursor={disabled ? 'text' : 'pointer'}
      />
    );

  return <>{content}</>;
};

export default StateDropdown;
