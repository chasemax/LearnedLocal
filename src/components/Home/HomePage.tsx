import { api } from "~/utils/api";
import { useUser } from "@clerk/nextjs";
import NavBar from "~/components/NavBar/NavBar";
import Footer from "~/components/Footer/Footer";
import Modal from "react-modal";
import { useState } from "react";
import ExperiencesDisplay from "~/components/ExperiencesDisplay";
import EmailSignup from "~/components/Home/EmailSignup";
import Register from "~/components/Home/Register";
import SideNav from "~/components/Home/SideNav";
import * as React from "react";
import FilteredExperiencesContext from "~/components/Home/FilteredExperiencesContext";
import { getExperiences } from "~/components/Home/HomePageUtils";
import { ExperienceInfo } from "~/components/types";
import AnnouncementWidget from "../common/AnnouncementWidget/AnnouncementWidget";

Modal.setAppElement("#__next");

const HomePage = () => {

  const sampleAnnouncements = [
    'Get 25% off when you use the code FIRST_EXPERIENCE on any experience!',
    'You have 5 unread messages.'
  ];

  const user = useUser();
  const experiencesQuery = api.experience.getAll.useQuery();

  const [experiences, setExperiences] = useState<ExperienceInfo[]>(
    experiencesQuery.data ?? []
  );
  const [filteredExperiences, setFilteredExperiences] = useState<
    ExperienceInfo[]
  >(experiencesQuery.data ?? []);

  React.useEffect(() => {
    setExperiences(experiencesQuery.data ?? []);
    console.log("experiencesQuery", experiencesQuery.data);
    setFilteredExperiences(
      getExperiences("Current", experiencesQuery.data ?? [])
    );
  }, [experiencesQuery.isLoading]);

  return (
    <FilteredExperiencesContext.Provider
      value={{ filteredExperiences, setFilteredExperiences }}
    >
      <div className="flex min-h-screen w-full flex-col bg-white">
        <NavBar
          isSignedIn={user.isSignedIn ?? false}
          showCreateExperienceButton={true}
          className="bg-white"
        />

        <div className="flex flex-col pt-16 md:pt-0">
          <AnnouncementWidget announcements={sampleAnnouncements}/>
          <div className="flex flex-col md:flex-row">
            <SideNav
              experiences={experiences}
              onSetExperiences={setFilteredExperiences}
            />
            <div className="flex-1">
              <ExperiencesDisplay isLoading={experiencesQuery.isLoading} />
              <EmailSignup />
            </div>
          </div>
          <div className="border-t-2 border-t-slate-100 pt-4">
            <Register />
          </div>
          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      </div>
    </FilteredExperiencesContext.Provider>
  );
};

export default HomePage;
