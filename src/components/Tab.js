const Tab = ({ label, onClick, className }) => {
  return (
    <h3>
      <li onClick={onClick}>{label}</li>
    </h3>
  );
};

export default Tab;
