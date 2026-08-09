import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  name: string;
}

interface State {
  hasError: boolean;
}

export default class SectionErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error(`Portfolio section failed: ${this.props.name}`, error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="section-pad bg-base">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-ink-soft">
              This section could not be loaded. Please refresh the page.
            </p>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}
