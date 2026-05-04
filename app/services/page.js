"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, BarChart, FileText, Zap, Settings, ShieldCheck, LineChart, Wrench } from 'lucide-react';

export default function Services() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const services = [
    {
      title: "EV Charging Feasibility Study",
      desc: "We assess whether your proposed EV charging station is technically and commercially viable.",
      icon: <BarChart size={32} />,
      points: ["Location assessment", "Customer demand analysis", "Charger type recommendation", "Power/load requirement", "CAPEX and OPEX estimate", "Revenue model", "Payback period", "Risk analysis", "Implementation roadmap"]
    },
    {
      title: "Licensing & Regulatory Support",
      desc: "We help clients understand and prepare the required documentation for EV charging station registration, licensing, and regulatory compliance in Pakistan.",
      icon: <FileText size={32} />,
      points: ["Regulatory requirement review", "Documentation checklist", "Application support", "Coordination guidance", "Compliance review", "Follow-up support"]
    },
    {
      title: "DISCO / Utility Coordination",
      desc: "EV charging stations require reliable electricity supply. We help assess and coordinate electricity load requirements with the relevant utility.",
      icon: <Zap size={32} />,
      points: ["Load estimation", "Transformer requirement review", "Grid connection assessment", "Utility documentation support", "Electrical infrastructure review"]
    },
    {
      title: "Technical Design Advisory",
      desc: "We provide technical guidance for safe and efficient EV charging station setup.",
      icon: <Settings size={32} />,
      points: ["AC/DC charger selection", "Charger capacity recommendation", "Cable and protection system review", "Earthing and safety advisory", "Layout planning", "Parking bay design", "Fire and electrical safety considerations"]
    },
    {
      title: "Vendor & Equipment Selection",
      desc: "We help clients compare EV charger suppliers and select suitable equipment based on cost, reliability, warranty, software, payment systems, and after-sales support.",
      icon: <ShieldCheck size={32} />,
      points: ["Vendor comparison", "Charger specification review", "Warranty review", "OCPP/software compatibility", "Payment system options", "Maintenance support review"]
    },
    {
      title: "Financial Model & ROI Analysis",
      desc: "We prepare financial models to help investors understand project viability.",
      icon: <LineChart size={32} />,
      points: ["CAPEX estimate", "OPEX estimate", "Electricity cost assumptions", "Utilization scenarios", "Revenue projections", "Payback period", "IRR / ROI estimate", "Sensitivity analysis"]
    },
    {
      title: "Installation & Commissioning Support",
      desc: "We support clients during installation and commissioning to ensure the project is implemented properly.",
      icon: <Wrench size={32} />,
      points: ["Installation planning", "Contractor coordination", "Technical checklist", "Testing support", "Commissioning documentation", "Launch readiness review"]
    }
  ];

  return (
    <>
      <section style={{ 
        position: 'relative', 
        padding: 'clamp(6rem,14vw,10rem) 0 clamp(3rem,6vw,6rem)', 
        background: 'linear-gradient(rgba(4, 13, 26, 0.85), rgba(11, 31, 51, 0.95)), url(/ev_charging_business.png)',
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
          <motion.div initial="hidden" animate="visible" variants={fadeIn} style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ color: 'white', fontSize: 'clamp(1.6rem,4vw,3rem)', marginBottom: '1.5rem' }}>EV Charging Station Consultancy Services in Pakistan</h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)' }}>
              EVConsults provides professional consultancy services for individuals, companies, petrol pumps, housing societies, malls, fleet operators, and investors planning to establish EV charging stations in Pakistan.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1" style={{ gap: '3rem' }}>
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}
                className="card" style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <div style={{ 
                    backgroundColor: 'rgba(57, 211, 83, 0.1)', color: 'var(--color-secondary)',
                    padding: '1.25rem', borderRadius: 'var(--radius-lg)', flexShrink: 0
                  }}>
                    {service.icon}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h2 style={{ marginBottom: '1rem', fontSize: 'clamp(1.2rem,3vw,1.5rem)' }}>{service.title}</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>{service.desc}</p>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Includes:</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                      {service.points.map((point, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                          <CheckCircle size={18} style={{ color: 'var(--color-secondary)', flexShrink: 0, marginTop: '0.1rem' }} />
                          <span style={{ fontSize: '0.95rem' }}>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-bg-light" style={{ textAlign: 'center' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2>Ready to Start Your EV Charging Project?</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>Get in touch with our experts to discuss your specific requirements.</p>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Book Free Consultation</Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
