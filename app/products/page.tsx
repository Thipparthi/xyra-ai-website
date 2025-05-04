export default function ProductsPage() {
    const products = [
      {
        title: "AIGRID",
        description: "An AI-powered engineering database editor that lets you view, edit, and manage bulk instrument and loop data in an Excel-like grid. Designed to streamline SPI workflows and bulk data operations.",
      },
      {
        title: "IO Generator",
        description: "Automatically generate I/O lists from control narratives, P&IDs, and instrument indexes. Saves hundreds of hours in manual I/O list preparation and ensures consistency with control system needs.",
      },
      {
        title: "Datasheet Assistant",
        description: "Generate, fill, and validate instrument datasheets using AI. Converts bulk tag data into pre-filled datasheets and formats them for SPI, PDF, or editable Excel — reducing engineering effort.",
      },
      {
        title: "DocuLens",
        description: "Extract engineering data from scanned PDFs and old documents using OCR + NLP. Classify content, tag drawings, and convert legacy documents into structured, searchable, editable formats.",
      },
      {
        title: "X-Assist",
        description: "An engineering copilot trained on ISA standards and project specs. Assists with design decisions, formula checks, standard lookups, and logic validation — like ChatGPT but for engineering.",
      },
    ];
  
    return (
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 text-white">
        <h1 className="text-4xl font-bold text-indigo-400 mb-8">Our Products & Solutions</h1>
        <p className="text-gray-300 mb-12 max-w-3xl">
          At XYRA.AI, we’re building AI-powered tools that eliminate repetitive engineering tasks and empower teams to focus on what truly matters — design, safety, and innovation.
        </p>
  
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10 shadow hover:shadow-xl transition-all"
            >
              <h2 className="text-2xl font-semibold text-indigo-300 mb-2">{product.title}</h2>
              <p className="text-gray-300">{product.description}</p>
            </div>
          ))}
        </div>
      </main>
    );
  }
  