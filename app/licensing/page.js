"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, Building2, Map, Zap, Settings, ShieldAlert, Cpu, FileText, ArrowRight } from 'lucide-react';

const fadeUp = { hidden:{ opacity:0, y:20 }, visible:{ opacity:1, y:0, transition:{ duration:0.6 } } };
const stagger = { hidden:{}, visible:{ transition:{ staggerChildren:0.1 } } };

const AREAS = [
  { title:"Business Registration", desc:"Proper business registration, tax registration, and legal entity documentation (SECP/CNIC/NTN).", icon:<Building2 size={20}/>, color:"#00AEEF" },
  { title:"Site Ownership / Lease", desc:"Clear ownership, lease, or written authorization for installation of EV charging infrastructure at the site.", icon:<Map size={20}/>, color:"#39D353" },
  { title:"Electricity Load Assessment", desc:"Available electricity load must be assessed to confirm whether the site can support AC or DC charging requirements.", icon:<Zap size={20}/>, color:"#F59E0B" },
  { title:"Utility / DISCO Coordination", desc:"Coordination with the relevant DISCO for load enhancement, metering, connection approval, or tariff matters.", icon:<Settings size={20}/>, color:"#8B5CF6" },
  { title:"Technical Compliance", desc:"Safe electrical design, protection systems, earthing, cabling, fire safety, and equipment standards compliance.", icon:<ShieldAlert size={20}/>, color:"#EF4444" },
  { title:"EV Charger Specifications", desc:"Chargers selected on AC/DC type, power rating, connector type, software, payment system, warranty, and maintenance.", icon:<Cpu size={20}/>, color:"#10B981" },
  { title:"Registration / Approval Documentation", desc:"Company profile, CNIC/NTN/SECP docs, site documents, load assessment, charger specs, layout plan, safety docs, and utility papers.", icon:<FileText size={20}/>, color:"#D946EF" },
];

const WHY = [
  "Pakistan-specific NEPRA licensing guidance",
  "Complete documentation checklist & support",
  "DISCO coordination & load application assistance",
  "Technical compliance verification",
  "Vendor-neutral charger specification advice",
  "End-to-end project documentation",
];

export default function Licensing() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{ position:'relative', padding:'clamp(6rem,14vw,9rem) 0 clamp(3rem,6vw,6rem)', background:'linear-gradient(135deg,rgba(4,13,26,0.92) 0%,rgba(11,31,51,0.96) 100%), url(/ev_charging_hero.png)', backgroundSize:'cover', backgroundPosition:'center', color:'white', textAlign:'center', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:'-60px', left:'-60px', width:'450px', height:'450px', background:'radial-gradient(circle,rgba(0,174,239,0.12) 0%,transparent 70%)', borderRadius:'50%' }} />
        <div style={{ position:'absolute', bottom:'-60px', right:'-60px', width:'400px', height:'400px', background:'radial-gradient(circle,rgba(57,211,83,0.1) 0%,transparent 70%)', borderRadius:'50%' }} />
        <div className="container" style={{ position:'relative', zIndex:2 }}>
          <motion.div initial="hidden" animate="visible" variants={stagger} style={{ maxWidth:'780px', margin:'0 auto' }}>
            <motion.span variants={fadeUp} style={{ display:'inline-flex', alignItems:'center', gap:'0.4rem', padding:'0.4rem 1.1rem', background:'rgba(57,211,83,0.12)', border:'1px solid rgba(57,211,83,0.3)', color:'#39D353', borderRadius:'2rem', fontSize:'0.75rem', fontWeight:'700', letterSpacing:'2px', textTransform:'uppercase', marginBottom:'1.5rem' }}>
              <Zap size={11} fill="#39D353"/> Licensing &amp; Regulatory
            </motion.span>
            <motion.h1 variants={fadeUp} style={{ color:'white', fontSize:'clamp(1.8rem,4.5vw,3.4rem)', fontWeight:'900', marginBottom:'1.25rem', lineHeight:1.1, letterSpacing:'-0.02em' }}>
              EV Charging Station<br/><span style={{ color:'#39D353' }}>Licensing &amp; Registration</span> in Pakistan
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize:'clamp(0.95rem,2vw,1.1rem)', color:'rgba(255,255,255,0.7)', maxWidth:'640px', margin:'0 auto', lineHeight:1.7 }}>
              Investors must consider regulatory requirements, electricity connection, technical standards, site safety, and documentation compliance before launching.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="section">
        <div className="container">
          <div className="licensing-layout">

            {/* Left: Steps */}
            <div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={stagger}>
                <motion.div variants={fadeUp} style={{ marginBottom:'2.5rem' }}>
                  <span style={{ display:'inline-block', background:'rgba(0,174,239,0.1)', color:'#00AEEF', border:'1px solid rgba(0,174,239,0.3)', borderRadius:'2rem', padding:'0.3rem 1rem', fontSize:'0.72rem', fontWeight:'700', letterSpacing:'2px', textTransform:'uppercase', marginBottom:'0.75rem' }}>Key Requirements</span>
                  <h2 style={{ marginBottom:'0.5rem' }}>Important Areas to Consider</h2>
                  <p style={{ color:'var(--color-text-light)', margin:0 }}>A structured overview of every critical area you need to address before going live.</p>
                </motion.div>

                <div style={{ display:'flex', flexDirection:'column', gap:'0.85rem' }}>
                  {AREAS.map((area, i) => (
                    <motion.div key={i} variants={fadeUp}
                      initial={{ opacity:0, x:-16 }}
                      whileInView={{ opacity:1, x:0 }}
                      viewport={{ once:true }}
                      transition={{ duration:0.45, delay:i*0.07 }}
                      whileHover={{ x:4, boxShadow:'0 8px 24px rgba(0,0,0,0.08)' }}
                      style={{ display:'flex', gap:'1rem', alignItems:'flex-start', padding:'1.2rem 1.4rem', borderRadius:'12px', background:'white', boxShadow:'0 1px 6px rgba(0,0,0,0.05)', border:'1px solid #EEF1F5', borderLeft:`3px solid ${area.color}`, transition:'all 0.25s' }}>
                      <div style={{ width:'40px', height:'40px', borderRadius:'10px', background:`${area.color}15`, border:`1px solid ${area.color}30`, display:'flex', alignItems:'center', justifyContent:'center', color:area.color, flexShrink:0 }}>
                        {area.icon}
                      </div>
                      <div style={{ flex:1 }}>
                        <div style={{ display:'flex', alignItems:'center', gap:'0.6rem', marginBottom:'0.25rem', flexWrap:'wrap' }}>
                          <span style={{ fontSize:'0.7rem', fontWeight:'700', color:area.color, background:`${area.color}12`, padding:'0.15rem 0.5rem', borderRadius:'1rem', letterSpacing:'1px', textTransform:'uppercase' }}>Step {i+1}</span>
                          <h4 style={{ margin:0, fontSize:'0.97rem', fontWeight:'700', color:'#0B1F33' }}>{area.title}</h4>
                        </div>
                        <p style={{ margin:0, fontSize:'0.86rem', color:'var(--color-text-light)', lineHeight:1.6 }}>{area.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Sticky panel */}
            <div className="licensing-sidebar">
              <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}
                style={{ borderRadius:'16px', overflow:'hidden', boxShadow:'0 20px 50px rgba(0,0,0,0.12)', border:'1px solid #EEF1F5' }}>
                <img src="/ev_charging_business.png" alt="NEPRA Licensing Pakistan" style={{ width:'100%', height:'200px', objectFit:'cover', display:'block' }}/>
                <div style={{ padding:'1.5rem', background:'white' }}>
                  <h3 style={{ fontSize:'1.05rem', marginBottom:'1rem', color:'#0B1F33' }}>Why Choose EVConsults?</h3>
                  <ul style={{ display:'flex', flexDirection:'column', gap:'0.6rem', padding:0, listStyle:'none', margin:0 }}>
                    {WHY.map((pt,i) => (
                      <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:'0.6rem', fontSize:'0.86rem', color:'var(--color-text-light)' }}>
                        <CheckCircle size={15} style={{ color:'#39D353', flexShrink:0, marginTop:'2px' }}/>{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* CTA card */}
              <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.15 }}
                style={{ borderRadius:'16px', background:'linear-gradient(135deg,#040D1A,#0B1F33)', padding:'1.8rem', position:'relative', overflow:'hidden', marginTop:'1.5rem' }}>
                <div style={{ position:'absolute', top:'-30px', right:'-30px', width:'150px', height:'150px', borderRadius:'50%', background:'radial-gradient(circle,rgba(57,211,83,0.2) 0%,transparent 70%)' }} />
                <div style={{ position:'relative', zIndex:1 }}>
                  <Zap size={28} color="#39D353" fill="#39D353" style={{ marginBottom:'0.75rem' }}/>
                  <h3 style={{ color:'white', fontSize:'1.05rem', marginBottom:'0.6rem' }}>Need Licensing Support?</h3>
                  <p style={{ color:'rgba(255,255,255,0.6)', fontSize:'0.86rem', marginBottom:'1.25rem', lineHeight:1.6 }}>Get professional documentation and regulatory guidance from Pakistan's leading EV consultants.</p>
                  <Link href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', padding:'0.75rem 1.5rem', background:'linear-gradient(135deg,#39D353,#2ab83f)', color:'#040D1A', fontWeight:'700', borderRadius:'50px', fontSize:'0.9rem', textDecoration:'none' }}>
                    Request Support <ArrowRight size={15}/>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <style>{`
          .licensing-layout {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
            align-items: flex-start;
          }
          .licensing-sidebar {
            order: -1;
          }
          @media (min-width: 900px) {
            .licensing-layout {
              grid-template-columns: 1fr 380px;
              gap: 4rem;
            }
            .licensing-sidebar {
              order: 0;
              position: sticky;
              top: 100px;
            }
          }
        `}</style>
      </section>
    </>
  );
}
