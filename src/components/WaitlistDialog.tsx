import { useState } from 'react';
import { X, ArrowRight, CheckCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface WaitlistDialogProps {
  children: React.ReactNode;
}

const WaitlistDialog = ({ children }: WaitlistDialogProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      // Reset state when dialog closes
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 200);
    }
  };

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-section-dark border-white/10 p-0 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent-highlight/5 pointer-events-none" />
        
        <div className="relative p-6 md:p-8">
          {!isSubmitted ? (
            <>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-white mb-2">
                  Join the Waitlist
                </h2>
                <p className="text-sm text-white/60">
                  Get early access to IntellHub when we launch. We'll notify you as soon as spots open.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm text-white/70 mb-2">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span>Joining...</span>
                  ) : (
                    <>
                      <span>Join Waitlist</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              <p className="mt-4 text-xs text-white/40 text-center">
                We respect your privacy. No spam, ever.
              </p>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-highlight/20 mb-4">
                <CheckCircle className="w-6 h-6 text-accent-highlight" />
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">
                You're on the list!
              </h2>
              <p className="text-sm text-white/60">
                We'll be in touch soon with early access details.
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;
