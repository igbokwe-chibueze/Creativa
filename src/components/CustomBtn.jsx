import PropTypes from 'prop-types';

const CustomBtn = ({
  classProps,
  children,
  label,
  showLabelOnHover,
  iconURL,
  backgroundStyle,
  textStyle,
  borderStyle,
  focusStyle,
  btnType,
  onBtnClick,
  disabled,
}) => {
  const handleClick = () => {
    if (onBtnClick && !disabled) {
      onBtnClick();
    }
  };

  return (
    <button
      className={`inline-flex items-center justify-center px-5 py-3 rounded-lg 
        disabled:bg-[#81926D] disabled:opacity-90 disabled:cursor-not-allowed ${classProps}
        ${backgroundStyle ? `${backgroundStyle}` : " bg-skin-button-accent hover:bg-skin-button-accent-hover "}
        ${textStyle ? `${textStyle}` : " text-base font-medium text-center text-skin-inverted "} 
        ${borderStyle ? `${borderStyle}` : " border border-red-300  "} 
        ${focusStyle ? `${focusStyle}` : " focus:ring-4 focus:ring-skin-focus2 "}
      `}
      type={btnType || "button"}
      onClick={handleClick}
      disabled={disabled}
    >
      <p className={showLabelOnHover ? " hidden group-hover:flex  " : ""}>
        {label || 'See More'}
      </p>

      {/* Use the iconUrl if i want to use an svg icon */}
      {iconURL && (
        <img
          src={iconURL}
          alt='icon'
          className=" ml-2 w-5 h-5 rounded-full bg-skin-fill "
        />
      )}
      
      {/* Use this instead of iconUrl if i want to use a jsx icon component */}
      {children}
    </button>
  );
};

CustomBtn.propTypes = {
  classProps: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  showLabelOnHover: PropTypes.bool,
  iconURL: PropTypes.string,
  backgroundStyle: PropTypes.string,
  textStyle: PropTypes.string,
  borderStyle: PropTypes.string,
  focusStyle: PropTypes.string,
  btnType: PropTypes.oneOf(['button', 'submit', 'reset']),
  onBtnClick: PropTypes.func,
  disabled: PropTypes.bool,
};

CustomBtn.defaultProps = {
  classProps: '',
  showLabelOnHover: false,
  btnType: 'button',
  disabled: false,
};

export default CustomBtn;
