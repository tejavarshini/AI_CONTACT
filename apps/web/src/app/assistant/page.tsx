import { AppShell } from "../../components/layout/app-shell";
import { Topbar } from "../../components/layout/topbar";
import { AssistantView } from "../../components/pages/assistant/assistant-view";

export default function AssistantPage() {
  return (
    <AppShell activeNav="assistant">
      <Topbar
        label="Ask for suggestions"
        title="Ask who can help you"
        description="Type a question and we will suggest the right people."
      />
      <AssistantView />
    </AppShell>
  );
}
