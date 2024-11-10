import './Table.scss';
// import Checkbox from '../Checkbox';
import { isFunction } from '../../assets/utils/functionUtils';
import classNames from 'classnames';
import { ColumnsProps, DataProps, TableProps ,SelectedItemProps} from './Types';
import { prepareData } from '../../utils/TableCell/TableCell';
import Checkbox from '../Checkbox';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';

// import NoData from '../NoData/NoData';

const Table = ({
  data = [],
  columns = [],
  headerType,
  withCheckbox,
  onSelect,
  allSelected,
  partialSelected = false,
  withFixedHeader = true,
  borderWithRadius = false,
   headerCheckboxDisabled = false,
  // noDataContent,
  // noDataImage,
  // noDataImageSize,
  height = '100%',
  className = '',
}: TableProps) => {
  const hanleOnclick = (column: ColumnsProps, row: DataProps) => {
    let { onClick, accessor } = column;
    if (onClick && isFunction(onClick)) {
      onClick(accessor, row);
    }
  };
  const onSelectClick = (e: object, item: SelectedItemProps) => {
    if (onSelect) {
      onSelect(e, item);
    }
  };
  if (checkEmpty(data)) return null;
  
  return (
    <div
      style={{ height: height }}
      className={classNames(className, {
        'ff-fixed-header-table': withFixedHeader,
        'border-borderRadius': borderWithRadius,
      })}
    >
      <table className={classNames(`ff-table`)} cellSpacing={0}>
        <thead
          className={classNames({
            'ff-fixed-header': withFixedHeader,
          })}
        >
          <tr >
            {/* columns.map((column, index) */}
            {columns.map((column, index) => (
              <th
                className={headerType && `${headerType}-bg`}
                key={column.header}
                style={{ width: column?.width }}
              >
                <div>
                   {index === 0 && withCheckbox && (
                    <span className="ff-table-checkbox">
                      <Checkbox
                        onChange={(e) => {
                          onSelectClick(e, { allSelected: e.target.checked });
                        }}
                        checked={
                          allSelected !== undefined ? allSelected : false
                        }
                        partial={!!partialSelected}
                        disabled={headerCheckboxDisabled}
                      />
                    </span>
                  )} 

                  {column.header}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((row: any, index: number) => (
              <tr key={row.id || index} className={classNames(className,{
                'disabled-row': row.disabled
              })} 
              >                
                {columns.map((column, i) => {
                  return (
                    <td
                      key={column.accessor + i}
                      onClick={() => hanleOnclick(column, row)}
                      className={classNames(column.className, {
                        'clickable-cell': column.onClick,
                      })}
                    >
                      <div>
                        {i === 0 && withCheckbox && (
                          <span className="ff-table-checkbox">
                            <Checkbox
                              onChange={(e) => {
                                onSelectClick(e, row);
                              }}
                              checked={row.checked}
                              disabled={!!row.disabled}
                            />
                          </span>
                        )}
                        {prepareData(row, column)}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
        </tbody>
      </table>
      {/* {data.length <= 0 && (
        <div
          className="no-data-content"
          style={{ height: `calc(${height} - 50px)` }}
        >
          <NoData
            image={noDataImage ? noDataImage : 'no_data_found'}
            content={noDataContent}
            size={noDataImageSize}
          />
        </div>
      )} */}
    </div>
  );
};

export default Table;
