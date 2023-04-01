import EmailList from "@/components/EmailList";

export default function Home() {
  return (
    <div
      style={{
        flex: "1",
        overflow: "scroll",
      }}
    >
      <EmailList />
    </div>
  );
}
