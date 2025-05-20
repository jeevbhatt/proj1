
import { useEffect } from "react";

function LearningUseeffect() {
  // useEffect is a hook that allows you to perform side effects in function components.
  // It is called after the component has rendered and can be used to fetch data, update the DOM, or perform other side effects.
  // The useEffect hook takes two arguments: a function and an optional array of dependencies.
  // The function is called after the component has rendered, and the array of dependencies determines when the effect should be re-run.
  useEffect(() => {
    console.log("useEffect called");
  }, []); // empty array means it will run only once when the component mounts

  return <div>Learning useEffect</div>;
}

export default LearningUseeffect;
