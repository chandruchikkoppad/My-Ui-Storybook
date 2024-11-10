import { ReactNode, useContext, useRef, useState } from 'react';
import {
  NlpDropDownListProps,
  nlpDropdownDefaultCSSData,
} from './NlpDropDownType';
import useClickOutside from '../../../../hooks/useClickOutside';
import { checkEmpty } from '../../../../utils/checkEmpty/checkEmpty';
import './NlpDropdown.scss';
import Typography from '../../../Typography';
import ffid from '../../../../utils/ffID/ffid';
import { ThemeContext } from '../../../ThemeProvider/ThemeProvider';
import classNames from 'classnames';

type OptionType = {
  label: ReactNode;
  value: string;
  displayName?: string;
  description?: string;
  nlpType?: string;
  path?: string;
  stepInputs?: { type?: string; name?: string }[];
  returnType?: string;
};

const NlpDropdown = ({
  onSelectBlur,
  onSelectOptionSelector,
  dropdownPosition,
  options = [],
  optionZIndex = 100,
  inputRef,
}: NlpDropDownListProps) => {
  //   const [nlpData, setNlpData] = useState<OptionType | null>(null); need to add setNlpData
  const [nlpData] = useState<OptionType | null>(null);
  const themeContext = useContext(ThemeContext);
  const currentTheme = themeContext?.currentTheme;
  const optionsWrapperRef = useRef<HTMLDivElement>(null);
  useClickOutside(optionsWrapperRef, onSelectBlur, [inputRef]);

  const { positionX, positionY, width, fromBottom } = dropdownPosition;
  const { margin, optionHeight, selectInputHeight, dropDownWrapperPadding } =
    nlpDropdownDefaultCSSData;

  const updateDropdownPosition = () => {
    let dropdownContainerHeight;

    if (checkEmpty(options)) {
      dropdownContainerHeight = optionHeight + 2 * dropDownWrapperPadding;
    } else if (options.length > 5) {
      dropdownContainerHeight = 5 * optionHeight + 2 * dropDownWrapperPadding;
    } else {
      dropdownContainerHeight =
        options.length * optionHeight + 2 * dropDownWrapperPadding;
    }

    if (fromBottom > dropdownContainerHeight + margin) {
      return {
        left: positionX,
        top: positionY,
        width: width,
        zIndex: optionZIndex,
      };
    }
    return {
      zIndex: optionZIndex,
      left: positionX,
      width: width,
      top: positionY - selectInputHeight - dropdownContainerHeight - margin,
    };
  };

  return (
    <div className="ff-nlp-dropdown-wrapper">
      <div
        ref={optionsWrapperRef}
        style={updateDropdownPosition()}
        className={classNames('ff-nlp-options-wrapper', currentTheme)}
      >
        <div className="ff-nlp-options-wrapper1">
          {!checkEmpty(options) ? (
            options.map((option) => (
              //   <div key={ffid()} onMouseEnter={() => setNlpData(option)}> need to add onMouseEnter
              <div key={ffid()}>
                <Typography
                  as="div"
                  lineHeight="30px"
                  className={classNames('ff-nlp-option', currentTheme)}
                  color="var(--ff-nlp-text-color)"
                  onClick={() => onSelectOptionSelector(option)}
                >
                  <span className="mr-2 fontPoppinsRegularMd">
                    {option?.nlpType === 'NLP' ? (
                      <b className="nlp-type-NLP">NLP</b>
                    ) : option?.nlpType === 'STEP_GROUP' ? (
                      <b className="nlp-type-step-group">SG</b>
                    ) : option?.nlpType === 'PROGRAM_ELEMENTS' ? (
                      <b className="nlp-type-program-elements">PE</b>
                    ) : (
                      '--'
                    )}
                  </span>
                  <span className="mr-2 fontPoppinsRegularMd">
                    {option?.platform === 'web' ? (
                      <b className="platform-web">Web</b>
                    ) : option?.platform === 'android' ? (
                      <b className="platform-android">Android</b>
                    ) : option?.platform === 'ios' ? (
                      <b className="platform-ios">iOS</b>
                    ) : option?.platform === 'Generic' ? (
                      <b className="platform-ios">Generic</b>
                    ) : (
                      '--'
                    )}
                  </span>
                  {option?.displayName}
                </Typography>
              </div>
            ))
          ) : (
            <Typography
              textAlign="center"
              lineHeight="32px"
              as="p"
              color="var(--ff-nlp-text-color)"
              className="ff-nlp-no-option"
            >
              No Results Found
            </Typography>
          )}
          <button>+ Web Services</button>
        </div>
        <div className="ff-nlp-data">
          <div>
            <div className="nlp-details-header mt-4">Name:</div>
            <div className="nlp-details nlpdiv-check">
              {nlpData?.displayName || '--'}
            </div>
            <div className="nlp-details-header mt-4">Description:</div>
            <div className="nlp-details nlpdiv-check">
              {nlpData?.description || '--'}
            </div>
            {nlpData?.nlpType === 'STEP_GROUP' && (
              <>
                <div className="nlp-details-header mt-4">Path:</div>
                <div className="nlp-details nlpdiv-check">
                  {nlpData?.path ? nlpData?.path.slice(6) : '--'}
                </div>
              </>
            )}
            <div className="nlp-details-header mt-4">Inputs:</div>
            {nlpData?.stepInputs?.length ? (
              nlpData.stepInputs.map((stepInput, index) => {
                const stepInputType = stepInput.type
                  ? stepInput.type.split('.').pop()
                  : '--';
                return (
                  <div key={index}>
                    <div className="nlp-details-header">Input{index + 1}:</div>
                    <div className="nlp-details">type: {stepInputType}</div>
                    <div className="nlp-details mb-4">
                      name: {stepInput.name || '--'}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="nlp-details mb-4">--</div>
            )}
            <div className="nlp-details-header">Output:</div>
            <div className="nlp-details mb-4">
              {nlpData?.returnType || '--'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NlpDropdown;
