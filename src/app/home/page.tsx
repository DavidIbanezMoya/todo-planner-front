import H1 from "@/components/H1";
import Header from "@/components/Header";
import GenericButton from "@/components/GenericButton";

export default function Home() {
  return (
    <div>
      <div>
        <Header>
                      <H1>To Do List Planner</H1>
        </Header>
      </div>
      <div>
        <GenericButton>My Name is Pepe</GenericButton>
      </div>
    </div>
  );
}
