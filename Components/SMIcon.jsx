import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import styles from '../Config/Styling';
export default function SMIcon(props) {
  const {name, size, color ,sx} = props;
  return (
    <>
      <Icon style={{ ...sx }} name={name} size={size ?? 20} color={color ?? styles._dark} />
    </>
  );
}