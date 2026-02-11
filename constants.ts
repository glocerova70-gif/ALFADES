import { SlideData, Section } from './types';

export const SLIDES: Record<Section, SlideData> = {
    [Section.HOME]: {
        id: 1,
        title: "GLOCEROVA",
        subtitle: "Innovación con Corazón Colombiano",
        description: "Formando a la próxima generación de líderes tecnológicos desde el corazón de Colombia para el mundo. Una educación de clase mundial al alcance de nuestros niños.",
        imageUrl: "https://bzsviqfepwwqbpiivpjr.supabase.co/storage/v1/object/public/Imagenes/WhatsApp%20Image%202026-02-05%20at%2021.21.30.jpeg",
        videoUrl: "https://bzsviqfepwwqbpiivpjr.supabase.co/storage/v1/object/public/Videos/WhatsApp%20Video%202026-01-29%20at%2010.11.50.mp4",
        ctaText: "Descubre Nuestra Misión"
    },
    [Section.METHODOLOGY]: {
        id: 2,
        title: "Aprender Jugando",
        subtitle: "Metodología STEM+ & IA",
        description: "Aplicamos los principios globales de 'Learning through Play': alegría, participación activa, iteración y significado social. Nuestra 'Caja de Actividades' integra robótica, Inteligencia Artificial y programación lúdica.",
        imageUrl: "https://bzsviqfepwwqbpiivpjr.supabase.co/storage/v1/object/public/Imagenes/WhatsApp%20Image%202026-02-05%20at%2021.20.07.jpeg",
        videoUrl: "https://bzsviqfepwwqbpiivpjr.supabase.co/storage/v1/object/public/Videos/WhatsApp%20Video%202026-02-03%20at%2008.58.48.mp4",
        ctaText: "Ver Programas",
        secondaryCta: {
            text: "Descargar Caja de Actividades",
            link: "https://bzsviqfepwwqbpiivpjr.supabase.co/storage/v1/object/public/Archivos/Caja%20de%20actividades.pdf"
        }
    },
    [Section.IMPACT]: {
        id: 3,
        title: "Impacto Social",
        subtitle: "Transformando Vidas en Colombia",
        description: "Llevamos oportunidades a zonas rurales y urbanas. Cada niño capacitado es una semilla de progreso para su familia y el país.",
        imageUrl: "https://bzsviqfepwwqbpiivpjr.supabase.co/storage/v1/object/public/Imagenes/WhatsApp%20Image%202026-01-26%20at%2022.30.22.jpeg",
        ctaText: "Nuestras Historias"
    },
    [Section.JOIN_US]: {
        id: 4,
        title: "Únete al Cambio",
        subtitle: "Conecta desde el Exterior",
        description: "Si estás fuera de Colombia, tu apoyo es vital. Apadrina un estudiante, dona equipos o conviértete en mentor remoto. Construyamos país juntos.",
        imageUrl: "https://picsum.photos/id/445/1920/1080", // Hands/Connection
        ctaText: "Contáctanos Hoy"
    }
};

export const INITIAL_CHAT_MESSAGE = "¡Hola! Soy el asistente virtual de Glocerova. Estoy aquí para contarte cómo estamos revolucionando la educación infantil en Colombia. ¿En qué puedo ayudarte hoy?";

export const SYSTEM_INSTRUCTION = `Eres el asistente virtual oficial de GLOCEROVA, un prestigioso instituto de educación tecnológica para niños en Colombia.
Tu tono es profesional, cálido, inspirador y muy "colombiano" (amable, servicial, usas un español neutro pero acogedor).
Tu objetivo es persuadir a personas interesadas en la educación (especialmente colombianos en el extranjero) sobre la importancia de nuestro proyecto.
Responde preguntas sobre:
1. Nuestra metodología (STEM, Robótica, IA para niños, Aprender Jugando).
2. Impacto social en Colombia (ayuda a comunidades vulnerables).
3. Formas de ayudar (donaciones, mentorías remotas).
La información debe ser concisa pero motivadora.
Si te preguntan algo fuera de este contexto, redirige amablemente la conversación a la educación y el futuro de los niños en Colombia.`;