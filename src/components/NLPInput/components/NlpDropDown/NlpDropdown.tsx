import { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import {
  NlpDropDownListProps,
  nlpDropdownDefaultCSSData,
  OptionType,
} from './NlpDropDownType';
import useClickOutside from '../../../../hooks/useClickOutside';
import { checkEmpty } from '../../../../utils/checkEmpty/checkEmpty';
import './NlpDropdown.scss';
import Typography from '../../../Typography';
import { ThemeContext } from '../../../ThemeProvider/ThemeProvider';
import classNames from 'classnames';
import Icon from '../../../Icon';
import IconButton from '../../../IconButton';
import { useIntersectionObserver } from '../../../../hooks/useIntersectionObserver';
import Tooltip from '../../../Tooltip';

const NlpDropdown = ({
  onSelectBlur,
  onSelectOptionSelector,
  dropdownPosition,
  options = [],
  optionZIndex = 100,
  inputRef,
  webServiceClick = () => {},
  containerWidth,
  loadMoreOptions,
  chipRef,
  isWebservice = true,
}: NlpDropDownListProps) => {
  const [nlpData, setNlpData] = useState<OptionType | null>(null);
  const [showNlpDetails, setShowNlpDetails] = useState('');
  const themeContext = useContext(ThemeContext);
  const currentTheme = themeContext?.currentTheme;
  const optionsWrapperRef = useRef<HTMLDivElement>(null);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  useClickOutside(optionsWrapperRef, onSelectBlur, [inputRef, chipRef]);

  const { positionX, positionY, width, fromBottom } = dropdownPosition;
  const { margin, optionHeight, selectInputHeight, dropDownWrapperPadding } =
    nlpDropdownDefaultCSSData;

  const updateDropdownPosition = () => {
    let dropdownContainerHeight;

    if (checkEmpty(options)) {
      dropdownContainerHeight = optionHeight + 2 * dropDownWrapperPadding;
    } else if (options.length > 0) {
      dropdownContainerHeight = 5 * optionHeight + 2 * dropDownWrapperPadding;
    } else {
      dropdownContainerHeight =
        options.length * optionHeight + 2 * dropDownWrapperPadding;
    }

    if (fromBottom > dropdownContainerHeight + margin + 80) {
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
      top:
        positionY - selectInputHeight - 92 - dropdownContainerHeight - margin,
    };
  };

  const getNLPType = (
    nlpType: string
  ): { label: string; className: string } => {
    let label = '';
    let className = '';

    if (nlpType === 'NLP') {
      label = 'NLP';
      className = 'ff-nlp';
    } else if (nlpType === 'STEP_GROUP') {
      label = 'SG';
      className = 'ff-sg';
    } else if (nlpType === 'PROGRAM_ELEMENTS') {
      label = 'PE';
      className = 'ff-pe';
    } else if (nlpType === 'WORKBENCH_REQUEST') {
      label = 'WS';
      className = 'ff-ws';
    } else {
      label = '--';
      className = 'nlp-default';
    }

    return { label, className };
  };

  const getPlatformIcon = ({ platform, nlpType }: any): JSX.Element => {
    if (nlpType === 'NLP') {
      if (platform === 'Web') {
        return <Icon name="web_icon" height={10} width={10} />;
      } else if (platform === 'Android') {
        return <Icon name="android_icon" height={10} width={10} />;
      } else if (platform === 'iOS') {
        return (
          <Icon
            name="ios_icon"
            height={10}
            width={10}
            color="var(--dotted-border-color)"
          />
        );
      } else if (platform === 'Generic') {
        return <Icon name="mobile_icon" height={10} width={10} />;
      } else {
        return <Icon name="common_nlp" height={10} width={10} />;
      }
    } else if (nlpType === 'WORKBENCH_REQUEST') {
      if (platform === 'Webservice') {
        return <Icon name="web_service_icon" height={8} width={8} />;
      }
    }
    return <></>;
  };

  useIntersectionObserver(['ff-nlp-dropdown-pagination'], {
    root: document.getElementById('ff-nlp-dropdown-options-wrapper'),
    rootMargin: '0px',
    threshold: 0.1,
    onIntersect: (entry, _observer) => {
      if (entry.isIntersecting) {
        if (loadMoreOptions) {
          loadMoreOptions();
        }
      }
    },
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!options.length) return;

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setFocusedIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0));
          break;

        case 'ArrowUp':
          event.preventDefault();
          setFocusedIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1));
          break;

        case 'Enter':
          if (focusedIndex >= 0) {
            if (options[focusedIndex]) {
              onSelectOptionSelector(options[focusedIndex]);
            }
          }
          break;

        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [options, focusedIndex]);

  useEffect(() => {
    if (focusedIndex < 0) return;
    const el = document.getElementById(`ff-nlp-option-${focusedIndex}`);
    if (el) {
      el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [focusedIndex]);

  const getDisplayName = (
    item?: {
      displayName?: ReactNode;
      name?: ReactNode;
      nlpName?: ReactNode;
    } | null
  ): ReactNode => {
    return item?.displayName || item?.name || item?.nlpName || '---';
  };

  return (
    <div className="ff-nlp-dropdown-wrapper">
      <div
        ref={optionsWrapperRef}
        style={{ ...updateDropdownPosition(), width: containerWidth }}
        className={classNames('ff-nlp-options-wrapper', currentTheme)}
        onMouseLeave={() => setShowNlpDetails('hide')}
      >
        <div className="ff-nlp-options-wrapper-main">
          <div
            className="ff-nlp-options-primary-wrapper"
            id="ff-nlp-dropdown-options-wrapper"
          >
            {!checkEmpty(options) ? (
              <>
                {options.map((option, index) => (
                  <div
                    key={`ff-nlp-option-${index}`}
                    onMouseEnter={() => {
                      setNlpData(option as OptionType);
                      setShowNlpDetails('show');
                    }}
                    id={`ff-nlp-option-${index}`}
                  >
                    <div
                      onMouseEnter={() => setFocusedIndex(index)}
                      onClick={() => onSelectOptionSelector(option)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                          onSelectOptionSelector(option);
                        }
                      }}
                    >
                      <Typography
                        as="div"
                        lineHeight="30px"
                        fontSize={12}
                        className={classNames('ff-nlp-option', currentTheme, {
                          'ff-nlp-option--selected': focusedIndex === index,
                        })}
                      >
                        <Tooltip title={option.platform}>
                          <span>
                            <Typography
                              className={`nlp-categories ${
                                getNLPType(option.nlpType).className
                              }`}
                              fontWeight="regular"
                              fontSize={8}
                              lineHeight="32px"
                            >
                              {getNLPType(option.nlpType).label}
                            </Typography>
                          </span>
                        </Tooltip>

                        <span>{getPlatformIcon(option)}</span>
                        {getDisplayName(option)}
                      </Typography>
                    </div>
                  </div>
                ))}

                <div id="ff-nlp-dropdown-pagination"></div>
              </>
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
          </div>
          {isWebservice && (
            <div>
              <div
                className={
                  showNlpDetails === 'show'
                    ? 'ff-nlp-web-service-div'
                    : 'ff-nlp-primary-web-service-div'
                }
              >
                <IconButton
                  iconName="plus_user_icon"
                  label="Web Service"
                  onClick={() => {
                    onSelectBlur();
                    webServiceClick();
                  }}
                />
              </div>
            </div>
          )}
        </div>
        <div
          className={
            showNlpDetails === 'show' ? 'ff-nlp-data-show' : 'ff-nlp-data-hide'
          }
        >
          <div className="ff-nlp-data-side-menu">
            {nlpData?.videoSrc && (
              <Typography
                className="nlp-details-header"
                fontWeight="semi-bold"
                fontSize={10}
              >
                Video
                <div className="nlp-details ">
                  <video
                    src={nlpData.videoSrc}
                    controls
                    className="nlp-video-player"
                    width="100%"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </Typography>
            )}

            <Typography
              className="nlp-details-header"
              fontWeight="semi-bold"
              fontSize={12}
            >
              NLP Details
              <Typography
                className="nlp-details"
                fontWeight="regular"
                fontSize={12}
              >
                {getDisplayName(nlpData)}
              </Typography>
            </Typography>

            <Typography
              className="nlp-details-header"
              fontWeight="semi-bold"
              fontSize={12}
            >
              Description
              <Typography
                className="nlp-details"
                fontWeight="regular"
                fontSize={12}
              >
                {nlpData?.description || '--'}
              </Typography>
            </Typography>

            {nlpData?.nlpType === 'STEP_GROUP' && (
              <>
                <Typography
                  className="nlp-details-header"
                  fontWeight="semi-bold"
                  fontSize={12}
                >
                  Path
                  <Typography
                    className="nlp-details"
                    fontWeight="regular"
                    fontSize={12}
                  >
                    {nlpData?.path ? nlpData?.path : '---'}
                  </Typography>
                </Typography>
              </>
            )}
            <Typography
              className="nlp-details-header"
              fontWeight="semi-bold"
              fontSize={12}
            >
              Inputs
            </Typography>
            {nlpData?.stepInputs?.length ? (
              nlpData.stepInputs.map((stepInput, index) => {
                const stepInputType = stepInput.type
                  ? stepInput?.type?.split('.')?.pop()
                  : '--';
                return (
                  <div key={index}>
                    <Typography
                      className="nlp-details-header"
                      fontWeight="semi-bold"
                      fontSize={12}
                    >
                      Input{index + 1}
                      <Typography
                        className="nlp-details"
                        fontWeight="regular"
                        fontSize={12}
                      >
                        type: {stepInputType}
                      </Typography>
                      <Typography
                        className="nlp-details"
                        fontWeight="regular"
                        fontSize={12}
                      >
                        name: {stepInput.name || '--'}
                      </Typography>
                    </Typography>
                  </div>
                );
              })
            ) : (
              <div className="nlp-details">--</div>
            )}

            <Typography
              className="nlp-details-header"
              fontWeight="semi-bold"
              fontSize={12}
            >
              Output
              <Typography
                className="nlp-details "
                fontWeight="regular"
                fontSize={12}
              >
                {nlpData?.returnType || '--'}
              </Typography>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NlpDropdown;
