import swimming from "../assets/swimming.png";
import playground from "../assets/playground.png";
import classPic from "../assets/class.png";
import bg from "../assets/bg.png";
const QZone = () => {
  return (
    <>
      <div className="bg-base-200 py-4 px-3">
        <h1 className="font-semibold text-primary text-xl mb-5">Q-Zone</h1>
        <div className="space-y-7">
          <img src={classPic} alt="class Pic" />
          <img src={playground} alt="playground Pic" />
          <img src={swimming} alt="swimming Pic" />
        </div>
      </div>
      <img src={bg} alt="bg Pic" />
    </>
  );
};

export default QZone;
