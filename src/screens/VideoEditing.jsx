import React from "react";
import Split from "react-split";

export default function PremiereProLayout() {
  return (
    <div className="h-screen flex flex-col bg-gray-900 text-gray-300 font-sans select-none">
      {/* Top Tabs Bar */}
      <div className="flex justify-center space-x-4 px-4 py-2 bg-gray-800 border-b border-gray-700">

        {["Assembly", "Editing", "Color", "Effects", "Audio", "Graphics"].map(tab => (
          <button
            key={tab}
            className="px-3 py-1 rounded hover:bg-gray-700 transition"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Area */}
      <Split
        sizes={[20, 60, 20]}
        minSize={100}
        expandToMin={false}
        gutterSize={8}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
        className="flex flex-1"
      >
        {/* Left Sidebar - Project Panel */}
        <div className="flex flex-col bg-gray-800 p-3 border-r border-gray-700 overflow-auto">
          <h2 className="font-semibold mb-2">Project</h2>
          <div className="flex flex-col space-y-1 text-sm">
            <div className="bg-gray-700 p-2 rounded cursor-pointer hover:bg-gray-600">Video1.mp4</div>
            <div className="bg-gray-700 p-2 rounded cursor-pointer hover:bg-gray-600">Audio1.wav</div>
            <div className="bg-gray-700 p-2 rounded cursor-pointer hover:bg-gray-600">Image1.png</div>
          </div>
        </div>

        {/* Center Area */}
        <Split
          sizes={[50, 50]}
          minSize={100}
          direction="vertical"
          gutterSize={8}
          className="flex flex-col"
        >
          {/* Top: Source and Program Monitor */}
          <Split
            sizes={[50, 50]}
            minSize={100}
            direction="horizontal"
            gutterSize={8}
            className="flex flex-1"
          >
            {/* Source Monitor */}
            <div className="bg-gray-800 border border-gray-700 rounded p-2 flex flex-col">
              <h3 className="text-sm font-semibold mb-1">Source Monitor</h3>
              <div className="flex-1 bg-black rounded flex items-center justify-center text-gray-500 text-xs">
                Video Preview Here
              </div>
              <div className="mt-2 flex space-x-2">
                <button className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-xs">Play</button>
                <button className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-xs">Pause</button>
                <button className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-xs">Stop</button>
              </div>
            </div>

            {/* Program Monitor */}
            <div className="bg-gray-800 border border-gray-700 rounded p-2 flex flex-col">
              <h3 className="text-sm font-semibold mb-1">Program Monitor</h3>
              <div className="flex-1 bg-black rounded flex items-center justify-center text-gray-500 text-xs">
                Final Output Preview
              </div>
              <div className="mt-2 flex space-x-2">
                <button className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-xs">Play</button>
                <button className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-xs">Pause</button>
                <button className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-xs">Stop</button>
              </div>
            </div>
          </Split>

          {/* Bottom: Timeline */}
          <div className="bg-gray-800 border-t border-gray-700 p-3 h-40 rounded mt-2">
            <h3 className="text-sm font-semibold mb-1">Timeline</h3>
            <div className="bg-gray-900 rounded flex items-center justify-center h-full text-gray-500 text-xs">
              Timeline Editor Here (Tracks, Clips, Playhead)
            </div>
          </div>
        </Split>

        {/* Right Sidebar - Effect Controls */}
        <div className="flex flex-col bg-gray-800 p-3 border-l border-gray-700 overflow-auto">
          <h2 className="font-semibold mb-2">Effect Controls</h2>
          <div className="text-xs space-y-3">
            <div>
              <label className="block mb-1">Opacity</label>
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="100"
                className="w-full"
              />
            </div>
            <div>
              <label className="block mb-1">Scale</label>
              <input
                type="range"
                min="0"
                max="200"
                defaultValue="100"
                className="w-full"
              />
            </div>
            <div>
              <label className="block mb-1">Rotation</label>
              <input
                type="range"
                min="0"
                max="360"
                defaultValue="0"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </Split>
    </div>
  );
}
