import Typography from '@mui/material/Typography';
export const TabPanel = ({ value, index, children }) => {
  return (
    <span
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Typography>{children}</Typography>}
    </span>
  );
};
