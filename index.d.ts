// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/61fcc7b0c7db5b90a14000528c7d292b20c9c55b/LICENSE
//
// This project is licensed under the MIT license.  Copyrights are respective of
// each contributor listed at the beginning of each definition file.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// Type definitions for gl 4.1
// Project: https://github.com/stackgl/headless-gl#readme
// Definitions by: sjx233 <https://github.com/sjx233>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface StackGLExtension {
  getExtension(extensionName: "STACKGL_resize_drawingbuffer"): STACKGL_resize_drawingbuffer | null;
  getExtension(extensionName: "STACKGL_destroy_context"): STACKGL_destroy_context | null;
}

interface STACKGL_resize_drawingbuffer {
  resize(width: GLint, height: GLint): void;
}

interface STACKGL_destroy_context {
  destroy(): void;
}

declare function createContext(width: number, height: number, options?: WebGLContextAttributes): WebGLRenderingContext & StackGLExtension;

export = createContext;
