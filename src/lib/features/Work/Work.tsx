import BasePage from "src/lib/base/BasePage";
import { useWorkViewModel } from "src/lib/providers/WorkViewModelProvider";
import WorkHeroSection from "./sections/WorkHeroSection";
import { SectionSpacing } from "src/lib/ui/components/SectionSpacing";
import ProjectsSection from "./sections/ProjectsSection";
import LetsGetInTouch from "src/lib/ui/components/LetsGetInTouch";
import { useEffect } from "react";
import { Box } from "@chakra-ui/react";

const Work = () => {
  const workV = useWorkViewModel();

  useEffect(() => {
    return () => {
      workV.dispose();
    };
  }, []);

  return (
    <BasePage>
      {/* HERO SECTION */}
      <WorkHeroSection />
      <SectionSpacing />

      {/* PROJECTS SECTION */}
      <ProjectsSection />

      {/* <SectionSpacing /> */}
      <Box h="50px" />

      {/* <LetsGetInTouch /> */}
    </BasePage>
  );
};

export default Work;
