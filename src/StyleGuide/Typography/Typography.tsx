import './Typography.scss';

const Typography = () => {
  return (
    <div className="typography-container">
      <div className="typography-header">
        <div>_Typography</div>
        <span>
          Our design system leverages a purposeful set of typography styles.
          We'he stress-tested this typographic scale across dozens of projects
          to make sure it's robust enough to use across (almost) any project,
          while remaining as accessible as possible for everyone.
        </span>
      </div>
      <div className="font-display">
        <div className="font-row">
          <div className="font-left">
            <div className="font-name">Poppins</div>
            <div className="font-sample">Aa</div>
            <div className="font-characters">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
              <br />
              abcdefghijklmnopqrstuvwxyz
              <br />
              0123456789
              <br />
              !@#$%^&*()
            </div>
          </div>

          <div className="font-right">
            <div className="font-right-section bold">
              <div className="font-sample-large">Aa</div>
              <div className="font-info">
                <span>Bold</span>
                <div className="font-size">font size: 12px = 0.75rem</div>
              </div>
            </div>
            <div className="font-right-section semi-bold">
              <div className="font-sample-large">Aa</div>
              <div className="font-info">
                <span>SemiBold</span>
                <div className="font-size">font size: 12px = 0.75rem</div>
              </div>
            </div>
            <div className="font-right-section regular">
              <div className="font-sample-large">Aa</div>
              <div className="font-info">
                <span>Regular</span>
                <div className="font-size">font size: 12px = 0.75rem</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typography;
