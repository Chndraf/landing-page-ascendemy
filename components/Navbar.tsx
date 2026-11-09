"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;

      setScrolled(scrollTop > 10);
      setProgress(scrollPercent);

      // Active section detection only on homepage
      if (isHomePage) {
        const sections = [
          "home",
          "tryout",
          "kompetisi",
          "news",
          "testimoni",
          "faq",
        ];
        const current =
          sections
            .filter((id) => {
              const el = document.getElementById(id);
              return el && el.getBoundingClientRect().top < 200;
            })
            .pop() || "home";

        const sectionMap: Record<string, string> = {
          home: "home",
          tryout: "tryout",
          kompetisi: "kompetisi",
          news: "news",
          testimoni: "testimoni",
          faq: "testimoni",
        };
        setActiveSection(sectionMap[current]);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Set active section based on current pathname
  useEffect(() => {
    if (pathname === "/") {
      setActiveSection("home");
    } else if (pathname === "/tryout") {
      setActiveSection("tryout");
    } else if (pathname === "/latihan") {
      setActiveSection("latihan");
    } else if (pathname === "/berita") {
      setActiveSection("news");
    }
  }, [pathname]);

  const getNavLink = (section: string) => {
    if (section === "latihan") {
      return "/latihan";
    } else if (section === "news") {
      return "/berita";
    } else if (section === "home") {
      return "/";
    } else if (isHomePage) {
      return `#${section}`;
    } else {
      return `/#${section}`;
    }
  };

  return (
    <header
      className={`nav ${scrolled ? "sc" : ""}`}
      style={{ "--p": progress } as any}
    >
      <div className="w nv">
        <a href="/" className="logo" aria-label="Ascendemy">
          <span className="ph lgo">
            <img
              src="/logo.svg"
              alt="Ascendemy"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </span>
        </a>
        <nav className="menu">
          <a
            href={getNavLink("home")}
            className={activeSection === "home" ? "on" : ""}
          >
            <svg width="20" height="20">
              <use href="#hm" />
            </svg>
            Dashboard
          </a>
          <a
            href={getNavLink("tryout")}
            className={activeSection === "tryout" ? "on" : ""}
          >
            <svg width="20" height="20">
              <use href="#cl" />
            </svg>
            Tryout
          </a>
          <a
            href={getNavLink("kompetisi")}
            className={activeSection === "kompetisi" ? "on" : ""}
          >
            <svg width="20" height="20">
              <use href="#tr" />
            </svg>
            Kompetisi
          </a>
          <a
            href={getNavLink("news")}
            className={activeSection === "news" ? "on" : ""}
          >
            <svg width="20" height="20">
              <use href="#np" />
            </svg>
            News
          </a>
          <a
            href={getNavLink("testimoni")}
            className={activeSection === "testimoni" ? "on" : ""}
          >
            <svg width="20" height="20">
              <use href="#bk" />
            </svg>
            Testimoni &amp; FAQ
          </a>
        </nav>
        <a href="#" className="btn o nb">
          Masuk Aplikasi CBT
        </a>
      </div>
    </header>
  );
}
