import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/wm-detail-logo.png";
import { BUSINESS } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12 px-6 bg-background">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <img src={logoAsset} alt="WM Detail Car Detailing — logo" className="h-8 w-auto"  />
          </div>
          <p className="font-display tracking-widest text-silver text-sm">CAR DETAILING</p>
          <p className="text-sm text-muted-foreground">Detailing samochodowy Dąbrowa Górnicza</p>
        </div>

        <nav aria-label="Usługi">
          <h2 className="text-xs uppercase tracking-[0.3em] text-silver mb-3">Usługi</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/uslugi/detailing-wnetrza" className="hover:text-foreground">Detailing wnętrza</Link></li>
            <li><Link to="/uslugi/korekta-lakieru" className="hover:text-foreground">Korekta lakieru</Link></li>
            <li><Link to="/uslugi/powloki-ceramiczne" className="hover:text-foreground">Powłoki ceramiczne</Link></li>
            <li><Link to="/uslugi/pranie-tapicerki" className="hover:text-foreground">Pranie tapicerki</Link></li>
            <li><Link to="/uslugi/mycie-detailingowe" className="hover:text-foreground">Mycie detailingowe</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="text-xs uppercase tracking-[0.3em] text-silver mb-3">Kontakt</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href={BUSINESS.phoneHref} className="hover:text-foreground">{BUSINESS.phone}</a></li>
            <li><a href={`mailto:${BUSINESS.email}`} className="hover:text-foreground">{BUSINESS.email}</a></li>
            <li>{BUSINESS.street}</li>
            <li>{BUSINESS.postalCode} {BUSINESS.city}</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-[0.3em] text-silver mb-3">Linki</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Instagram</a></li>
            <li><a href="https://www.tiktok.com/@wmdetail.dg" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">TikTok</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=61590402852365&ref=PROFILE_EDIT_xav_ig_profile_page_web" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Facebook</a></li>
            <li><a href={BUSINESS.maps} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Google Maps</a></li>
            <li><Link to="/polityka-prywatnosci" className="hover:text-foreground">Polityka prywatności</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-border text-xs text-muted-foreground uppercase tracking-widest text-center">
        © {new Date().getFullYear()} WM Detail Car Detailing — Odpicujemy Twoją Furę
      </div>
    </footer>
  );
}
