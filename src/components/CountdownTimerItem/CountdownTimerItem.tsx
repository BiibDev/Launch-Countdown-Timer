import ICountdownTimerItem from "./ICountdownTimerItem";
import TimerImage from "./countdown-timer-item.svg";
import "./CountdownTimerItem.scss";

function CountdownTimerItem(props: ICountdownTimerItem) {
  const { value, type } = props;

  function formatNumberToString(value: number): string {
    return String(value).padStart(2, "0");
  }

  return (
    <div className="countdown-timer-item">
      <img src={TimerImage} alt="" />
      <p className="number">{formatNumberToString(value)}</p>
      <p className="type">{type}</p>
    </div>
  );
}

export default CountdownTimerItem;
