import IcoMoon, { IconComponent, iconList } from 'react-icomoon';
const iconSet = require('./selection.json');

iconList(iconSet);

const IconComm: typeof IconComponent = (props) => (
  <IcoMoon iconSet={iconSet} {...props} />
);

export default IconComm;
