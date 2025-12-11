// app/page.tsx

"use client"; 

import Link from 'next/link';
import Image from 'next/image'; 
import { motion, Variants } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react'; 

// Menggunakan jalur relatif keluar folder /app/
import Header from '../components/Header'; 
import AnimatedProjectCard from '../components/AnimatedProjectCard'; 

// Pastikan file gambar Anda ada di public/images/achmadashari.jpg
import FotoProfil from './../public/images/achmadashari.jpg'; 

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null, 
      rootMargin: '-80px 0px -80% 0px', 
      threshold: 0, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);
    
    sectionRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      sectionRefs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const setSectionRef = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120,
      },
    },
  };

  return (
    <>
      <Header activeSection={activeSection} /> 
      
      <main className="home-main">
        <div className="container">

          {/* --- HERO SECTION --- */}
          <section id="home" className="hero" ref={setSectionRef}> 
            <div className="hero-left">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.p className="tag" variants={itemVariants}>
                  Project Manager & Siswa SMK Telkom Makassar
                </motion.p>
                
                <motion.h1 variants={itemVariants}>
                  Achmad Ashari Memimpin & Merencanakan Proyek.
                  <br/>
                  Menghadirkan Solusi Teknologi.
                </motion.h1>
                
                <motion.p className="lead" variants={itemVariants}>
                  Fokus pada manajemen proyek teknologi, memastikan alur kerja yang efisien, dan mencapai hasil yang terukur. Keahlian utama dalam SDLC, Time Management, dan Komunikasi Teknis-Nonteknis.
                </motion.p>

                <motion.div className="btn-group" variants={itemVariants}>
                  <Link href="/#projects" className="btn">Lihat Proyek (Studi Kasus)</Link>
                  <Link href="/#contact" className="btn btn-outline">Hubungi Saya</Link> 
                </motion.div>
              </motion.div>
            </div>

            <div className="hero-right">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="photo-frame"
              >
                <Image 
                    src={FotoProfil} 
                    alt="Foto Profil Achmad Ashari" 
                    width={350}    
                    height={350}   
                    priority={true} 
                    style={{ objectFit: 'cover' }}
                />
              </motion.div>
            </div>
          </section>
          
          <hr/>

          {/* --- PROJECTS SECTION --- */}
          <section id="projects" ref={setSectionRef}>
            <h2>Proyek & Studi Kasus</h2>
            
            <div className="projects-grid">
              
              <AnimatedProjectCard
                title="Website Restoran: Penerapan SDLC Penuh"
                role="Project Manager & Lead Developer"
                description="Studi kasus lengkap tentang bagaimana saya mengelola siklus hidup pengembangan (SDLC) proyek website, mulai dari fase Inisiasi, Perencanaan Scope menggunakan Trello, hingga Eksekusi dan Penutupan."
                tech="Trello, SDLC, Komunikasi Tim, HTML/CSS"
                link="/projects/restaurant-website"
                delay={0.1} 
              />

              <AnimatedProjectCard
                title="Manajemen Tugas Kelompok Sekolah"
                role="Koordinator Tim"
                description="Pengalaman mengorganisir dan mendelegasikan tugas kepada tim multi-disiplin. Studi ini berfokus pada teknik mitigasi risiko keterlambatan dan menjaga motivasi anggota tim."
                tech="Delegasi, Risk Assessment, Time Management"
                link="/projects/school-management"
                delay={0.2} 
              />
              
              <AnimatedProjectCard
                title="Sistem Dokumentasi Proyek Akhir"
                role="Spesialis Dokumentasi & Koordinator"
                description="Membangun dan mengimplementasikan struktur dokumentasi proyek yang terstandar menggunakan Notion/Google Docs, memastikan transfer pengetahuan dan kemudahan audit."
                tech="Notion/Google Docs, Dokumentasi Teknis, Change Management"
                link="/projects/documentation-system"
                delay={0.3} 
              />
              
            </div>
          </section>
          
          <hr/>

          {/* --- ABOUT SECTION --- */}
          <section id="about" ref={setSectionRef} style={{ marginTop: '80px', paddingBottom: '40px' }}>
            <h2>Tentang Achmad Ashari</h2>
            <p className="lead" style={{ maxWidth: '800px', margin: '20px 0', color: 'var(--text)' }}>
              Saya adalah siswa SMK Telkom Makassar yang bersemangat dalam manajemen proyek berbasis teknologi.
            </p>
            <p style={{ maxWidth: '800px', color: 'var(--muted)' }}>
              Saya percaya bahwa setiap proyek yang sukses dimulai dari perencanaan yang matang dan komunikasi yang jernih. Saya terampil dalam memecah masalah kompleks menjadi tugas-tugas yang terkelola dan berdedikasi untuk memberikan hasil tepat waktu dan sesuai harapan. Pengalaman saya di SMK membekali saya dengan dasar teknis yang kuat, membuat saya mampu menjembatani komunikasi antara tim teknis dan stakeholder non-teknis.
            </p>
            
            {/* TOMBOL UNDUH RESUME - DENGAN ATRIBUT DOWNLOAD UNTUK MEMAKSA UNDUH */}
            <Link 
                href="/resume.pdf" 
                className="btn-outline" 
                style={{ marginTop: '30px', display: 'inline-block' }} 
                target="_blank" 
                rel="noopener noreferrer"
                download="Achmad_Ashari_Resume.pdf" 
            >
                Unduh Resume Saya
            </Link>
          </section>
          
          <hr/>

          {/* --- CONTACT SECTION --- */}
          <section id="contact" ref={setSectionRef} style={{ marginTop: '80px', paddingBottom: '40px' }}>
            <h2>Hubungi Saya</h2>
            <p style={{ color: 'var(--muted)', margin: '20px 0' }}>
              Tertarik untuk berdiskusi tentang peluang proyek atau manajemen tim? Mari terhubung!
            </p>
            <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                <a href="mailto:achmad.ashari@example.com" className="btn">Email</a>
                <a 
                    href=" https://www.instagram.com/_unknownname._?igsh=MWxiYzNkdTdseHR0ZA==" 
                    className="btn-outline" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Instagram
                
                </a>
            </div>
          </section>

        </div>
      </main>
      
      <footer>
        <div className="container" style={{padding: '30px 0', textAlign: 'center', fontSize: '0.85rem', color: 'var(--muted)', borderTop: '1px solid var(--glass)'}}>
            &copy; {new Date().getFullYear()} Achmad Ashari. Dibuat dengan Next.js.
        </div>
      </footer>
    </>
  );
}