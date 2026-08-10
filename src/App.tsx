import Hero from "./components/organisms/Hero";
import Skills from "./components/organisms/Skills";
import Projects from "./components/organisms/Projects";
import Contact from "./components/organisms/Contact";
import MainLayout from "./components/templates/MainLayout";

function App() {
  return (
    <MainLayout>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </MainLayout>
  );
}

export default App;
