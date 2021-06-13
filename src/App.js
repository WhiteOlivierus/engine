import Engine from "./engine";
import projectData from "./projectData";

const App = () => {
    const preProcessor = {
        ...projectData,
        images: [...projectData.images.map(i => `/img/${i}`)]
    };

    return (<Engine data={preProcessor} />);
};

export default App;

