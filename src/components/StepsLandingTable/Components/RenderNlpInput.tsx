import { useEffect, useState } from 'react';
import NlpInput from '../../NLPInput';
import { filterSearchData } from '../../NLPInput/sampleData';

const RenderNlpInput = ({
  handelChangeNlp,
  handleNlpSelect,
  nlpList,
  rowIndex,
  optionZIndex,
  rowData,
}: any) => {
  const [inputValue, setInputValue] = useState(rowData.name || '');
  const [optionList, setOptionList] = useState(nlpList);

  useEffect(() => {
    setInputValue(rowData.name || '');
  }),
    [rowData.name];
  const handleChange = (e: any) => {
    handelChangeNlp(e.target.value);
    setInputValue(e.target.value);
    setOptionList(nlpList);
  };

  const handleSelect = (e: any) => {
    setInputValue(e.displayName);
    handleNlpSelect({
      selectedNlp: e,
      indexValue: rowIndex,
      stepId: rowData.stepId,
    });
  };

  return (
    <NlpInput
      label="Search NLP"
      leftIcon="ai_search"
      rightIcon="help_icon"
      rightIconColor="var(--nlp-color)"
      value={inputValue}
      optionZIndex={optionZIndex}
      onChange={handleChange}
      onSelect={handleSelect}
      optionsList={optionList}
      chipOptionList={filterSearchData}
      webServiceClick={() => {
        alert('webServiceClick!');
      }}
      onHelpIconClick={() => {
        alert('Help icon clicked!!');
      }}
      aiIconClick={() => {
        alert('aiIconClick!');
      }}
      containerWidth={'1000px'}
    />
  );
};

export default RenderNlpInput;
