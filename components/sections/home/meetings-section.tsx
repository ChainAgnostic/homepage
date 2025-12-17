import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export function MeetingsSection() {
  return (
    <section id="meetings" className="border-b border-border bg-muted/30">
      <div className="container px-4 py-24 mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Open Meetings
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            All CASA meetings are open to the public. Non-members are welcome to
            attend respectfully. Editorial meetings provide a great onboarding
            experience and overview of all workstreams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 border-border">
            <Calendar className="h-10 w-10 mb-4 text-accent-green" />
            <h3 className="text-xl font-bold mb-3">Meeting Calendar</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              View all upcoming CASA meetings, including editorial sessions and
              working group discussions.
            </p>
            <div className="space-y-3">
              <Button
                variant="outline"
                asChild
                className="w-full justify-start bg-transparent"
              >
                <Link
                  href="https://bit.ly/thecasacalendar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Subscribe via Google Calendar
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="w-full justify-start bg-transparent"
              >
                <Link
                  href="https://bit.ly/thepubliccasacalendar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Public Calendar
                </Link>
              </Button>
            </div>
          </Card>

          <Card className="p-8 border-border bg-card">
            <h3 className="text-xl font-bold mb-4">Meeting Agenda</h3>
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">1. Explicit Agenda</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Items set by WG participants, linked from calendar events
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">2. Implicit Agenda</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Review outstanding PRs, active issues, and topics of general
                  interest
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">3. Housekeeping</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Time for agenda requests and open discussion
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
