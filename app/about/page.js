"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Target, Eye, ShieldCheck, Zap } from 'lucide-react';

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <section style={{ 
        position: 'relative', 
        padding: 'clamp(6rem,14vw,10rem) 0 clamp(3rem,6vw,6rem)', 
        background: 'linear-gradient(rgba(4, 13, 26, 0.85), rgba(11, 31, 51, 0.95)), url(/ev_charging_hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{ position: 'absolute', top: '-50%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0, 174, 239, 0.15) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: '-50%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(57, 211, 83, 0.1) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h1 style={{ color: 'white', marginBottom: '1.5rem', fontSize: 'clamp(1.8rem,5vw,3rem)' }}>About EVConsults</h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto' }}>
              Pakistan&apos;s trusted advisory platform for EV charging infrastructure development.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-two-col" style={{ gap: '3rem', alignItems: 'center' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 style={{ marginBottom: '1.5rem' }}>Who We Are</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                EVConsults is a Pakistan-focused consultancy platform created to support the development of electric vehicle charging infrastructure. We help investors, businesses, property owners, petrol pumps, housing societies, and fleet operators understand the technical, regulatory, financial, and operational requirements for setting up EV charging stations.
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                Our objective is to make EV charging station development easier, safer, legally compliant, and commercially viable.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '1.5rem' }}>
                  <Target size={40} style={{ color: 'var(--color-secondary)', flexShrink: 0 }} />
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.2rem', marginBottom: '0.25rem' }}>Our Mission</h3>
                    <p style={{ margin: 0, fontSize: '0.95rem' }}>To accelerate Pakistan&apos;s transition toward clean mobility by providing professional consultancy.</p>
                  </div>
                </div>
                <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '1.5rem' }}>
                  <Eye size={40} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.2rem', marginBottom: '0.25rem' }}>Our Vision</h3>
                    <p style={{ margin: 0, fontSize: '0.95rem' }}>To become Pakistan&apos;s trusted advisory platform for EV charging station planning and implementation.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', height: 'clamp(280px,50vw,500px)' }}
            >
              <img 
                src="/ev_charging_hero.png" 
                alt="Modern EV Charging Station" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} 
              />
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        .about-two-col {
          display: grid;
          grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .about-two-col {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>

      <section className="section section-bg-light" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Our Core Values</h2>
            <p style={{ color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto' }}>The principles that guide our consultancy and ensure your EV project&apos;s success.</p>
          </motion.div>
          <div className="grid md:grid-cols-3" style={{ gap: '1.5rem' }}>
            {["Professionalism", "Transparency", "Technical accuracy", "Regulatory compliance", "Commercial practicality", "Sustainability"].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="card" style={{ textAlign: 'center', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '160px' }}
              >
                <div style={{ background: 'rgba(57, 211, 83, 0.1)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <ShieldCheck size={24} style={{ color: 'var(--color-secondary)' }} />
                </div>
                <h3 style={{ fontSize: '1.1rem', margin: 0, fontWeight: '700' }}>{value}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-footer CTA - Refined and Tightened */}
      <section style={{ padding: '4rem 0 7rem', background: 'var(--color-light-grey)' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ 
              background: 'linear-gradient(135deg, #040D1A 0%, #0B1F33 100%)', 
              borderRadius: '28px', 
              padding: '5rem 2rem', 
              textAlign: 'center', 
              border: '1px solid rgba(255,255,255,0.08)', 
              position: 'relative', 
              overflow: 'hidden', 
              boxShadow: '0 30px 60px -12px rgba(0,0,0,0.45)' 
            }}
          >
            {/* Ambient Background Glows */}
            <div style={{ position: 'absolute', top: '-20%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0, 174, 239, 0.12) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>
            <div style={{ position: 'absolute', bottom: '-20%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(57, 211, 83, 0.1) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ 
                fontSize: 'clamp(2rem, 5vw, 3.2rem)', 
                marginBottom: '1.25rem', 
                color: 'white', 
                fontWeight: '900', 
                letterSpacing: '-1px',
                lineHeight: 1.1
              }}>
                Ready to <span style={{ color: 'var(--color-secondary)' }}>Power the Future?</span>
              </h2>
              <p style={{ 
                color: 'rgba(255,255,255,0.7)', 
                fontSize: '1.2rem', 
                maxWidth: '650px', 
                margin: '0 auto 3rem auto', 
                lineHeight: '1.8' 
              }}>
                Join Pakistan&apos;s EV revolution. Get end-to-end guidance on setting up a profitable, compliant, and state-of-the-art charging infrastructure.
              </p>
              <Link href="/contact" className="btn" style={{ 
                background: 'var(--color-secondary)',
                color: 'var(--color-primary)',
                padding: '1.25rem 3.5rem', 
                fontSize: '1.1rem', 
                textTransform: 'uppercase', 
                letterSpacing: '2px', 
                fontWeight: '800',
                borderRadius: '50px',
                boxShadow: '0 10px 20px -5px rgba(57, 211, 83, 0.4)',
                transition: 'all 0.3s'
              }}>
                Consult With An Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
}
