const Tab = ({ label, onClick, className }) => {
  return (
    <li onClick={onClick} className={className}>
      {label}
    </li>
  );
};

export default Tab;
