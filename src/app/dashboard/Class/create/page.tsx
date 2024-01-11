import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const Dashboard = () => {
  return (
    <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
      <div className="w-full flex gap-5">
        <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
          <h4 className="text-[20px] font-Regular">Create Class</h4>
          <Button className="rounded-sm">Add Class</Button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 h-full">
        <div className="w-full bg-white h-fit border rounded-sm ">
          <div className="border-b pb-3 w-full flex items-center h-[60px] p-5 justify-between">
            <p className="p-0 font-Regular">Class Information</p>
          </div>
          <form className="flex flex-col gap-5 p-5">
            <div className="flex flex-col gap-5">
              <div className="lg:flex-row flex flex-col gap-5">
                <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Class Name</Label>
                  <Input
                    type="text"
                    className="rounded-sm focus-visible:outline-none"
                    placeholder="Class Name"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Teacher</Label>
                  <Select>
                    <SelectTrigger className="w-full h-10 border py-3 rounded-sm font-Medium">
                      <SelectValue
                        placeholder="Select Teacher"
                        className="text-[16px] "
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Ishaq Abubakar</SelectItem>
                      <SelectItem value="Female">Richard Boachie</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Class Size</Label>
                  <Input
                    type="number"
                    className="rounded-sm focus-visible:outline-none"
                    placeholder="Class size"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;