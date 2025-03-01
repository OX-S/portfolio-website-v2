import React from 'react';
import mandelbrotImage from '../../assets/mandelbrot1.webp';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

const MandelbrotSlide = () => {
    return (
        <div className="px-3">
            <div className="bg-base-100 p-6 rounded-lg shadow-lg relative">
                <div className="flex flex-row justify-between items-stretch">
                    <div className="w-3/4 pr-4">
                        <div className="text-left">
                            <h2 className="text-6xl font-bold mb-4 max-w-full overflow-hidden whitespace-nowrap">
                                PyOpenGL Mandelbrot
                            </h2>
                            <div className="flex flex-row">
                                <div className="w-1/2 pr-4">
                                    <p className="text-xl mb-6 light:text-gray-600 dark:text-gray-400">
                                        The program renders the Mandelbrot set in real-time using OpenGL and GLSL
                                        shaders. It employs a smooth iteration count formula to minimize banding and a
                                        cosine-based color mapping for vivid, high-contrast visuals. The fragment shader
                                        uses FP64 precision for ultra-deep zoom. Users can interactively pan and
                                        zoom to explore fine fractal details.
                                    </p>
                                    <div className="mt-8 text-center">
                                        <a
                                            href="https://github.com/yourusername/mandelbrot-visualization"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md shadow-md text-white bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 transition duration-300 transform hover:scale-105"
                                        >
                                            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.776.42-1.304.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.399 3-.405 1.02.006 2.043.139 3 .405 2.29-1.552 3.296-1.23 3.296-1.23.656 1.653.244 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.805 5.625-5.475 5.921.432.37.815 1.102.815 2.222 0 1.606-.015 2.896-.015 3.286 0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12c0-6.63-5.37-12-12-12z"/>
                                            </svg>
                                            See on GitHub
                                        </a>
                                    </div>
                                </div>
                                <div className="w-1/2 pl-4">
                                    <div className="mb-6">
                                        <div className="mb-2">
                                            <span className="font-bold">
                                                Smooth Iteration Count Formula:
                                            </span>
                                        </div>
                                        <div className="text-sm mb-2">
                                            Interpolates the raw iteration count into a continuous value.
                                        </div>
                                        <BlockMath
                                            math={`\\tilde{n} = i + 1 - \\frac{\\ln\\!\\left(\\frac{\\ln|z|}{\\ln 2}\\right)}{\\ln 2}`}
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <div className="mb-2">
                                            <span className="font-bold">
                                                Cosine-Based Color Mapping Formula:
                                            </span>
                                        </div>
                                        <div className="text-sm mb-2">
                                            Maps the smooth iteration parameter <InlineMath math="t"/> to an RGB color.
                                        </div>
                                        <BlockMath
                                            math={`\\text{color} = 0.5 + 0.5\\,\\cos\\!\\left(2\\pi\\, t + \\begin{pmatrix} 0 \\\\ 0.8 \\\\ 1.5 \\end{pmatrix}\\right)`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="w-1/4">
                            <img
                                src={mandelbrotImage}
                                alt="Mandelbrot Visualization"
                                className="h-auto w-full rounded-lg shadow-md"
                            />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MandelbrotSlide;
