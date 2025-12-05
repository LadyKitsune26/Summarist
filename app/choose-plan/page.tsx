// app/choose-plan/page.tsx
import Sidebar from "../components/Sidebar";

export default function ChoosePlan() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 container-max mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Choose Plan</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border rounded shadow">
            <div className="text-lg font-medium">Monthly</div>
            <div className="text-3xl font-bold my-4">$9.99 / month</div>
            <button className="px-4 py-2 bg-green-600 text-white rounded">Subscribe</button>
          </div>
          <div className="p-6 border rounded shadow">
            <div className="text-lg font-medium">Yearly</div>
            <div className="text-3xl font-bold my-4">$79 / year</div>
            <div className="text-sm text-slate-500 mb-3">7-day free trial</div>
            <button className="px-4 py-2 bg-green-600 text-white rounded">Subscribe</button>
          </div>
        </div>
      </main>
    </div>
  );
}
