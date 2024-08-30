import { Route, Routes } from "react-router";
import Layout from "./components/layout";
import Home from "./components/Home";
import DebounceEl from "./components/concepts/debouncer/DebounceEl";
import CompoundCompEl from "./components/concepts/compoundComponentPattern/CompoundCompEl";
// import CodeRunnerEl from "./components/compiler/CodeRunnerEl";
import FetcherEL from "./components/concepts/fetcher/fetcherEL";
import DataToParent from "./components/concepts/dataToParent/DataToParent";
import GenerateTable from "./components/problems/generateTable/GenerateTable";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="question1" element={<DebounceEl />} />
        <Route path="question2" element={<CompoundCompEl />} />
        {/* <Route path="question3" element={<CodeRunnerEl />} /> */}
        <Route path="question3" element={<FetcherEL />} />
        <Route path="question4" element={<DataToParent />} />
        <Route path="question5" element={<GenerateTable />} />
      </Route>
    </Routes>
  );
}

export default App;
