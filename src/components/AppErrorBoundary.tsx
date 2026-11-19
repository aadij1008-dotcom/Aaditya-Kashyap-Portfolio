import { Component, type ErrorInfo, type ReactNode } from 'react';

interface AppErrorBoundaryProps { children: ReactNode }
interface AppErrorBoundaryState { hasError: boolean }

export default class AppErrorBoundary extends Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
  state: AppErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): AppErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Portfolio render error:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main style={{ minHeight: '100vh', background: '#080814', color: '#f5f1ff', fontFamily: 'system-ui, sans-serif', display: 'grid', placeItems: 'center', padding: '2rem' }}>
          <section style={{ maxWidth: 560, textAlign: 'center', border: '1px solid rgba(40,240,240,.45)', borderRadius: 16, padding: '2rem', background: '#101022' }}>
            <p style={{ color: '#28f0f0', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase' }}>Portfolio recovery</p>
            <h1 style={{ fontSize: '2rem', margin: '1rem 0' }}>The page hit a temporary display error.</h1>
            <p style={{ color: '#c4bfdc', lineHeight: 1.6 }}>Your portfolio content is safe. Reload the page to try again.</p>
            <button type="button" onClick={() => window.location.reload()} style={{ marginTop: '1.5rem', border: 0, borderRadius: 8, padding: '.8rem 1.2rem', background: '#28f0f0', color: '#080814', fontWeight: 700, cursor: 'pointer' }}>Reload portfolio</button>
          </section>
        </main>
      );
    }
    return this.props.children;
  }
}
