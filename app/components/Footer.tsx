export default function Footer() {
  return (
    <footer className="bg-gray-50 text-slate-700 fade-in">
      <div className="container-max mx-auto px-4 py-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Actions</h4>
            <ul className="space-y-2 text-sm">
              <li>Summarist Magazine</li>
              <li>Cancel Subscription</li>
              <li>Help</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Useful Links</h4>
            <ul className="space-y-2 text-sm">
              <li>Pricing</li>
              <li>Summarist Business</li>
              <li>Gift Cards</li>
              <li>Authors & Publishers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Careers</li>
              <li>Partners</li>
              <li>Code of Conduct</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Other</h4>
            <ul className="space-y-2 text-sm">
              <li>Sitemap</li>
              <li>Legal Notice</li>
              <li>Terms of Service</li>
              <li>Privacy Policies</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-gray-900">
          &copy; 2023 Summarist
        </div>
      </div>
    </footer>
  );
}

