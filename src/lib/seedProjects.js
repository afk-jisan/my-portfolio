import {supabase} from "./supabaseClient.js"
import { projectsData } from "../Components/Projects/data.js";

async function seedProjects() {
  const payload = projectsData.map(project => ({
    title: project.title,
    description: project.description,
    tech: project.tech || "",
    src: project.src,
    src_link: project.srcLink,
    live_link: project.liveLink,
    color: project.color,
  }));

  const { data, error } = await supabase.from("projects").insert(payload);

  if (error) {
    console.error("Insert error:", error);
  } else {
    console.log("Inserted:", data);
  }
}

seedProjects();
