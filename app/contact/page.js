"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, CheckCircle, AlertCircle, Loader } from 'lucide-react';

export default function Contact() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [form, setForm] = useState({ name:'', company:'', phone:'', email:'', city:'', siteType:'Petrol Pump', load:'', message:'' });

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    const text = `*⚡ NEW EV CONSULTATION REQUEST*

*Name:* ${form.name}
*Company:* ${form.company || 'N/A'}
*Phone:* ${form.phone}
*Email:* ${form.email}
*City:* ${form.city}
*Site Type:* ${form.siteType}
*Available Load:* ${form.load || 'Not specified'}

*Message:* 
${form.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/923225131504?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
    
    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ 
        position: 'relative', 
        padding: 'clamp(7rem, 15vw, 10rem) 0 clamp(3rem, 6vw, 6rem)', 
        background: 'linear-gradient(rgba(4, 13, 26, 0.85), rgba(11, 31, 51, 0.95)), url(/clean_energy_city.png)',
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
            <h1 style={{ color: 'white', marginBottom: '1.5rem', textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>Contact EVConsults</h1>
            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: 'rgba(255,255,255,0.9)', maxWidth: '800px', margin: '0 auto', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
              Planning to set up an EV charging station in Pakistan? Share your details and our team will contact you for a premium consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="section" style={{ background: 'linear-gradient(to bottom, #0B1F33 0%, #06111C 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0, 174, 239, 0.1) 0%, transparent 60%)', borderRadius: '50%', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(57, 211, 83, 0.1) 0%, transparent 60%)', borderRadius: '50%', zIndex: 0 }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Responsive contact layout */}
          <div className="contact-layout">

            {/* LEFT: contact info */}
            <motion.div className="contact-info" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 style={{ marginBottom: '1rem', color: 'white' }}>Get in Touch</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', fontSize: '1.05rem' }}>We provide end-to-end advisory for EV charging infrastructure. Let&apos;s build the future of mobility together.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                {/* Email */}
                <motion.a 
                  href="mailto:alviaatif@hotmail.com"
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.25rem', background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 'var(--radius-lg)', cursor: 'pointer', textDecoration: 'none' }}
                >
                  <div style={{ background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.2), rgba(0, 174, 239, 0.05))', padding: '0.85rem', borderRadius: '0.85rem', color: 'var(--color-accent)', border: '1px solid rgba(0, 174, 239, 0.2)', flexShrink: 0 }}>
                    <Mail size={24} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h4 style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem' }}>Email Us</h4>
                    <p style={{ margin: 0, fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', fontWeight: '500', color: 'white', wordBreak: 'break-all' }}>alviaatif@hotmail.com</p>
                  </div>
                </motion.a>

                {/* Phone 1 */}
                <motion.a 
                  href="tel:+923225131504"
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.25rem', background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 'var(--radius-lg)', cursor: 'pointer', textDecoration: 'none', transition: 'all 0.3s' }}
                >
                  <div style={{ background: 'linear-gradient(135deg, rgba(57, 211, 83, 0.2), rgba(57, 211, 83, 0.05))', padding: '0.85rem', borderRadius: '0.85rem', color: 'var(--color-secondary)', border: '1px solid rgba(57, 211, 83, 0.2)', flexShrink: 0 }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem' }}>Call Aatif Alvi</h4>
                    <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: '500', color: 'white' }}>0322 5131504</p>
                  </div>
                </motion.a>

                {/* Phone 2 */}
                <motion.a 
                  href="tel:+923328271005"
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.25rem', background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 'var(--radius-lg)', cursor: 'pointer', textDecoration: 'none', transition: 'all 0.3s' }}
                >
                  <div style={{ background: 'linear-gradient(135deg, rgba(57, 211, 83, 0.2), rgba(57, 211, 83, 0.05))', padding: '0.85rem', borderRadius: '0.85rem', color: 'var(--color-secondary)', border: '1px solid rgba(57, 211, 83, 0.2)', flexShrink: 0 }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem' }}>Call Naveed Ahmed</h4>
                    <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: '500', color: 'white' }}>0332 8271005</p>
                  </div>
                </motion.a>

                {/* WhatsApp */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} viewport={{ once: true }}
                  style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.1)', marginTop: '0.5rem' }}
                >
                  <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontSize: '1.15rem' }}>
                    <MessageSquare size={18} style={{ color: 'var(--color-secondary)' }} /> Connect on WhatsApp
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <motion.a 
                      whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                      href="https://wa.me/923225131504" target="_blank" rel="noreferrer" 
                      className="btn" style={{ backgroundColor: '#25D366', color: 'white', display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center', padding: '0.75rem', fontSize: '0.9rem', borderRadius: 'var(--radius-md)', border: 'none' }}
                    >
                      <MessageSquare size={15} /> Aatif
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                      href="https://wa.me/923328271005" target="_blank" rel="noreferrer" 
                      className="btn" style={{ backgroundColor: '#128C7E', color: 'white', display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center', padding: '0.75rem', fontSize: '0.9rem', borderRadius: 'var(--radius-md)', border: 'none' }}
                    >
                      <MessageSquare size={15} /> Naveed
                    </motion.a>
                  </div>
                </motion.div>

              </div>
            </motion.div>

            {/* RIGHT: Form */}
            <motion.div 
              className="contact-form-card"
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              style={{ 
                background: 'rgba(255, 255, 255, 0.02)', 
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: 'var(--radius-xl)', 
                padding: 'clamp(1.5rem, 5vw, 3rem)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
            >
              <h3 style={{ marginBottom: '2rem', color: 'white', fontSize: '1.6rem' }}>Consultation Request</h3>

              {status === 'success' ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  style={{ backgroundColor: 'rgba(57, 211, 83, 0.1)', padding: '3rem 2rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', border: '1px solid rgba(57, 211, 83, 0.3)' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#39D353', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                    <CheckCircle size={32} color="#040D1A" />
                  </div>
                  <h4 style={{ marginBottom: '0.75rem', color: 'white', fontSize: '1.4rem' }}>Request Sent Successfully!</h4>
                  <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)' }}>Thank you! Our EV consultant will contact you shortly to discuss your project.</p>
                </motion.div>
              ) : status === 'error' ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  style={{ backgroundColor: 'rgba(239,68,68,0.1)', padding: '2rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', border: '1px solid rgba(239,68,68,0.3)', marginBottom: '1.5rem' }}>
                  <AlertCircle size={32} color="#EF4444" style={{ margin: '0 auto 1rem' }} />
                  <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)' }}>Something went wrong. Please email us directly at <strong>alviaatif@hotmail.com</strong></p>
                  <button onClick={() => setStatus('idle')} style={{ marginTop: '1rem', background: 'none', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '0.5rem 1.2rem', borderRadius: '50px', cursor: 'pointer', fontSize: '0.85rem' }}>Try Again</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Name + Company */}
                  <div className="form-row-2col">
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Full Name *</label>
                      <input type="text" className="form-input" value={form.name} onChange={set('name')} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }} required />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Company Name</label>
                      <input type="text" className="form-input" value={form.company} onChange={set('company')} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }} />
                    </div>
                  </div>

                  {/* Phone + Email */}
                  <div className="form-row-2col" style={{ marginTop: '1.5rem' }}>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Phone Number *</label>
                      <input type="tel" className="form-input" value={form.phone} onChange={set('phone')} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }} required />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Email Address *</label>
                      <input type="email" className="form-input" value={form.email} onChange={set('email')} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }} required />
                    </div>
                  </div>

                  {/* City */}
                  <div className="form-group" style={{ marginBottom: '1.5rem', marginTop: '1.5rem' }}>
                    <label className="form-label" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>City *</label>
                    <input type="text" className="form-input" value={form.city} onChange={set('city')} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }} required />
                  </div>

                  {/* Site Type + Load */}
                  <div className="form-row-2col">
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Type of Site</label>
                      <select className="form-select" value={form.siteType} onChange={set('siteType')} style={{ background: '#0B1F33', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}>
                        {['Petrol Pump','Mall','Housing Society','Hotel','Restaurant','Commercial Building','Fleet','Other'].map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Available Load (kW)</label>
                      <input type="text" className="form-input" value={form.load} onChange={set('load')} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }} placeholder="e.g. 50kW" />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="form-group" style={{ marginBottom: '2rem', marginTop: '1.5rem' }}>
                    <label className="form-label" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Message</label>
                    <textarea className="form-textarea" value={form.message} onChange={set('message')} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', minHeight: '140px' }} placeholder="Tell us about your project requirements..." required />
                  </div>

                  <motion.button whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(57,211,83,0.4)' }} whileTap={{ scale: 0.98 }}
                    type="submit" disabled={status === 'loading'} className="btn btn-primary"
                    style={{ width: '100%', padding: '1.1rem', fontSize: '1rem', letterSpacing: '1px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', opacity: status === 'loading' ? 0.8 : 1 }}>
                    {status === 'loading' ? (<><Loader size={18} style={{ animation: 'spin 1s linear infinite' }} /> Sending...</>) : 'Submit Request'}
                  </motion.button>
                  <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
                </form>
              )}

            </motion.div>
          </div>
        </div>

        {/* Responsive styles */}
        <style>{`
          .contact-layout {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .form-row-2col {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
            margin-bottom: 0;
          }
          @media (min-width: 640px) {
            .form-row-2col {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (min-width: 900px) {
            .contact-layout {
              grid-template-columns: 5fr 7fr;
              gap: 4rem;
              align-items: flex-start;
            }
          }
        `}</style>
      </section>
    </>
  );
}
