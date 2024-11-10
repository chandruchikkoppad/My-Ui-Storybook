import Select from './../Select/Select';
import { StateDropdownProps } from './StateDropdownTypes';

const StateDropdown = ({
  value,
  nodeObj,
  isReviewer = false,
  isApprovePage = false,
  handleStateValueClick,
  handleDropdownOptionsClick,
  disabled = false,
  isOnlyReviewer = false,
  userHasOnlyViewAccess = false,
}: StateDropdownProps) => {
  let currentState = value.toUpperCase();
  let content;
  let options;
  const isReviewerAndClickedOnReviewState: boolean =
    isReviewer && !isApprovePage && currentState === 'REVIEW' && !nodeObj;
  let selectedOption: { label: string; value: string } = {
    label: '',
    value: '',
  };

  if (isOnlyReviewer && !isApprovePage) {
    options = [
      {
        label: 'New',
        value: 'New',
      },
      {
        label: 'Approve',
        value: 'Approve',
      },
    ];
  } else if (!isReviewer && !isApprovePage) {
    options = [
      {
        label: currentState === 'REJECTED' ? 'Rejected' : 'New',
        value: currentState === 'REJECTED' ? 'Rejected' : 'New',
      },
      {
        label: 'Approve',
        value: 'Approve',
      },
    ];
  } else if (isReviewerAndClickedOnReviewState) {
    options = [
      {
        label: 'Review',
        value: 'Review',
      },
      {
        label: 'Approve',
        value: 'Approve',
      },
    ];
  } else if (isReviewer && !isApprovePage) {
    options = [
      {
        label: currentState === 'REJECTED' ? 'Rejected' : 'New',
        value: currentState === 'REJECTED' ? 'Rejected' : 'New',
      },
      {
        label: 'Review',
        value: 'Review',
      },
      {
        label: 'Approve',
        value: 'Approve',
      },
    ];
  } else if (isReviewer && isApprovePage) {
    options = [
      {
        label: 'Review',
        value: 'Review',
      },
      {
        label: 'Approve',
        value: 'Approve',
      },
      {
        label: 'Reject',
        value: 'Reject',
      },
    ];
  } else {
    options = [
      {
        label: 'New',
        value: 'New',
      },
      {
        label: 'Review',
        value: 'Review',
      },
    ];
  }

  let handleSelectedOption: (value: string) => {
    label: string;
    value: string;
  } = (value) => {
    return { label: value, value: value };
  };
  if (currentState === 'REVIEW') {
    selectedOption = handleSelectedOption(value);
  } else if (currentState === 'NEW' && !isApprovePage) {
    selectedOption = handleSelectedOption(value);
  } else if (currentState === 'REJECTED' && !isApprovePage) {
    selectedOption = handleSelectedOption(value);
  } else {
    selectedOption = handleSelectedOption(value);
  }

  if (
    ((currentState === 'NEW' && !isApprovePage) ||
      (isApprovePage && currentState === 'REVIEW') ||
      isReviewerAndClickedOnReviewState ||
      (currentState === 'REJECTED' && !isApprovePage)) &&
    !userHasOnlyViewAccess
  ) {
    content = !disabled ? (
      <Select
        label={value}
        disabled={disabled}
        onChange={handleDropdownOptionsClick}
        optionsList={options}
        selectedOption={selectedOption}
        showLabel={false}
        showBorder={true}
      />
    ) : (
      <Select
        label={value}
        disabled={true}
        onChange={handleDropdownOptionsClick}
        optionsList={options}
        selectedOption={selectedOption}
        showLabel={false}
        showBorder={true}
      />
    );
  } else if (
    currentState === 'REVIEW' &&
    (!isApprovePage || userHasOnlyViewAccess)
  ) {
    content = (
      <Select
        label={value}
        disabled={true}
        onChange={handleDropdownOptionsClick}
        optionsList={options}
        selectedOption={selectedOption}
        showLabel={false}
        showBorder={true}
      />
    );
  } else if (currentState === 'APPROVED') {
    content = (
      <Select
        label={value}
        disabled={true}
        onChange={handleDropdownOptionsClick}
        optionsList={options}
        selectedOption={selectedOption}
        showLabel={false}
        showBorder={true}
      />
    );
  } else if (currentState === 'REJECTED' && userHasOnlyViewAccess) {
    content = (
      <Select
        label={value}
        disabled={true}
        onChange={handleDropdownOptionsClick}
        optionsList={options}
        selectedOption={selectedOption}
        showLabel={false}
        showBorder={true}
      />
    );
  } else if (currentState === 'NEW' && userHasOnlyViewAccess) {
    content = (
      <Select
        label={value}
        disabled={true}
        onChange={handleDropdownOptionsClick}
        optionsList={options}
        selectedOption={selectedOption}
        showLabel={false}
        showBorder={true}
      />
    );
  } else {
    content = '';
  }

  return (
    <div
      onClick={() => {
        if (
          value.toLowerCase() === 'review' &&
          !userHasOnlyViewAccess &&
          !isApprovePage &&
          !isReviewer
        ) {
          handleStateValueClick();
        }
      }}
    >
      {content}
    </div>
  );
};

export default StateDropdown;
