import classNames from 'classnames';
import './HistoryCard.scss';
import Typography from '../Typography';

export interface HistoryCardProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant: 'primary' | 'danger' | 'success' | 'warning';
  /**
   * Details to display the title
   */
  title: React.ReactNode;
  /**
   * Header for the tab
   */
  tabTitle: string;
  /**
   * Comment message to display on the history card
   */
  comment: string;
  /**
   * profileShortName is to display short name inside the profile avatar
   */
  profileShortName: string;
}

const HistoryCard = ({
  variant,
  title,
  tabTitle,
  comment,
  profileShortName,
}: HistoryCardProps) => {
  return (
    <div className="ff-history-card">
      <div className={classNames('header', `header--${variant}`)}>
        <Typography fontWeight={'semi-bold'}>{tabTitle}</Typography>
      </div>
      <div className="body">
        <div className="title">
          <div className="profile">
            <Typography className={classNames('avatar', `avatar--${variant}`)}>
              {profileShortName}
            </Typography>
            <Typography>{title}</Typography>
          </div>
        </div>

        <div className="comment-container">
          <Typography fontWeight="semi-bold" className="heading">
            Comments:
          </Typography>
          <Typography
            color={'var(--details-page-value-color)'}
            className="comment"
          >
            {comment}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
