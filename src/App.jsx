import { Route, Routes } from "react-router";
import Layout from "./components/layout";
import Home from "./components/Home";
import DebounceEl from "./components/concepts/debouncer/DebounceEl";
import CompoundCompEl from "./components/concepts/compoundComponentPattern/CompoundCompEl";
// import CodeRunnerEl from "./components/compiler/CodeRunnerEl";
import FetcherEL from "./components/concepts/fetcher/FetcherEL";
import DataToParent from "./components/concepts/dataToParent/DataToParent";
import GenerateTable from "./components/problems/generateTable/GenerateTable";
import Counter from "./components/problems/Counter/Counter";
import StopWatch from "./components/problems/stopwatch/StopWatch";
import Clock from "./components/problems/Clock/Clock";
import DebouncedFunctionEl from "./components/concepts/debouncedFunction/DebouncedFunctionEl";
import ThrottledValueEL from "./components/concepts/throttledValue/ThrottledValueEl";
import ThrottledFunctionEl from "./components/concepts/throttledFunction/ThrottledFunctionEL";
import Slides from "./components/problems/slides/Slides";
import Quiz from "./components/problems/quiz/Quiz";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        {/* CONCEPTS */}
        <Route path="debouncedValue" element={<DebounceEl />} />
        <Route path="debouncedFunction" element={<DebouncedFunctionEl />} />
        <Route path="throttledValue" element={<ThrottledValueEL />} />
        <Route path="throttledFunction" element={<ThrottledFunctionEl />} />
        <Route path="compoundComponent" element={<CompoundCompEl />} />
        <Route path="customFetcher" element={<FetcherEL />} />
        <Route path="childToParentCommunication" element={<DataToParent />} />

        {/* PROBLEMS */}
        <Route path="question1" element={<GenerateTable />} />
        <Route path="question2" element={<Counter />} />
        <Route path="question3" element={<StopWatch />} />
        <Route path="question4" element={<Clock />} />
        <Route path="slides" element={<Slides />} />
        <Route path="quiz" element={<Quiz />} />
      </Route>
    </Routes>
  );
}

export default App;
{
  /* <Route path="question3" element={<CodeRunnerEl />} /> */
}
