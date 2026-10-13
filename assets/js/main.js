/* ────────────────────────────────────────────
   main.js — Portfolio interactions & EmailJS contact form
   Loaded with defer; DOM is guaranteed ready.
   ──────────────────────────────────────────── */

/* ── Footer year ── */
document.getElementById('yr').textContent = new Date().getFullYear();

/* ── Mobile menu ── */
var mb = document.getElementById('mb'),
    gl = document.getElementById('gl');

function cm() {
  gl.classList.remove('open');
  mb.setAttribute('aria-expanded', 'false');
}

mb.addEventListener('click', function () {
  var o = gl.classList.toggle('open');
  mb.setAttribute('aria-expanded', o);
});

gl.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') cm();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') cm();
});

/* ── EmailJS contact form ── */
(function () {
  var form = document.getElementById('cf');
  var btn  = document.getElementById('cf-btn');
  var st   = document.getElementById('cf-status');
  var sending = false;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    /* Prevent duplicate submissions */
    if (sending) return;
    sending = true;

    /* Basic input sanitisation — trim whitespace */
    var name = form.from_name.value.trim();
    var email = form.from_email.value.trim();
    var message = form.message.value.trim();

    if (!name || !email || !message) {
      st.style.color = '#f87171';
      st.textContent = 'Please fill in all fields.';
      sending = false;
      return;
    }

    /* Loading state */
    btn.disabled = true;
    btn.textContent = 'Sending\u2026';
    st.textContent = '';
    st.style.color = '';

    emailjs.sendForm('service_6ezngc4', 'template_t8bsaii', form, '3zkawizVbDpJuy327')
      .then(function () {
        st.style.color = '#4ade80';
        st.textContent = 'Message sent successfully!';
        form.reset();
      })
      .catch(function () {
        st.style.color = '#f87171';
        st.textContent = 'Failed to send. Please try again.';
      })
      .finally(function () {
        btn.disabled = false;
        btn.textContent = 'Send message';
        sending = false;
      });
  });
})();

/* ── Scroll-reveal animations ── */
var rv = document.querySelectorAll('.rv');

rv.forEach(function (el) {
  var s = Array.prototype.filter.call(el.parentNode.children, function (c) {
    return c.classList.contains('rv');
  });
  el.style.transitionDelay = (s.indexOf(el) * 0.06) + 's';
});

if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (x) {
      if (x.isIntersecting) {
        x.target.classList.add('in');
        io.unobserve(x.target);
      }
    });
  }, { threshold: 0.1 });
  rv.forEach(function (el) { io.observe(el); });
} else {
  rv.forEach(function (el) { el.classList.add('in'); });
}
