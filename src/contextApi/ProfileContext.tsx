import  { createContext, Dispatch, SetStateAction, ReactNode, useState } from "react";

interface ProfileProp {
  profiluserId:string;
  setProfileuserid: Dispatch<SetStateAction<string>>;
  profilefirstname: string;
  setProfilefirstname: Dispatch<SetStateAction<string>>;
  profilelastname: string;
  setProfilelastname: Dispatch<SetStateAction<string>>;
  profileemail: string;
  setProfileemail: Dispatch<SetStateAction<string>>;
  profilegender: string;
  setProfilegender: Dispatch<SetStateAction<string>>;
  profiledateofbirth: string;
  setProfiledateofbirth: Dispatch<SetStateAction<string>>;
  profileplaceofbirth: string;
  setProfileplaceofbirth: Dispatch<SetStateAction<string>>;
  profileoccupation: string;
  setProfileoccupation: Dispatch<SetStateAction<string>>;
  profilenationality: string; // corrected property name
  setProfilenationality: Dispatch<SetStateAction<string>>;
  profilephonenumber: string;
  setProfilephonenumber: Dispatch<SetStateAction<string>>;
  profilemother: string;
  setProfilemother: Dispatch<SetStateAction<string>>;
  profilefather: string;
  setProfilefather: Dispatch<SetStateAction<string>>;
  profilemaritalstatus: string;
  setProfilemaritalstatus: Dispatch<SetStateAction<string>>;
  profilenumberofchildren: string;
  setProfilenumberofchildren: Dispatch<SetStateAction<string>>;
  profileprimaryeducation: string;
  setProfileprimaryeducation: Dispatch<SetStateAction<string>>;
  profilesecondaryeducation: string;
  setProfilesecondaryeducation: Dispatch<SetStateAction<string>>;
  profiletertiaryeducation: string;
  setProfiletertiaryeducation: Dispatch<SetStateAction<string>>;
  profilehometown: string;
  setProfilehometown: Dispatch<SetStateAction<string>>;
  profileisupdate:number;
  setprofileisupdate: Dispatch<SetStateAction<number>>;
}

interface ProfileContextProviderProps {
  children: ReactNode;
}

export const ProfilesContext = createContext<ProfileProp>({
    profiluserId:"",
    setProfileuserid:()=>{},
    profilefirstname: "",
    setProfilefirstname: () => {},
    profilelastname: "",
    setProfilelastname: () => {},
    profileemail: "",
    setProfileemail: () => {},
    profilegender: "",
    setProfilegender: () => {},
    profiledateofbirth: "",
    setProfiledateofbirth: () => {},
    profileplaceofbirth: "",
    setProfileplaceofbirth: () => {},
    profileoccupation: "",
    setProfileoccupation: () => {},
    profilenationality: "",
    setProfilenationality: () => {},
    profilephonenumber: "",
    setProfilephonenumber: () => {},
    profilemother: "",
    setProfilemother: () => {},
    profilefather: "",
    setProfilefather: () => {},
    profilemaritalstatus: "",
    setProfilemaritalstatus: () => {},
    profilenumberofchildren: "",
    setProfilenumberofchildren: () => {},
    profileprimaryeducation: "",
    setProfileprimaryeducation: () => {},
    profilesecondaryeducation: "",
    setProfilesecondaryeducation: () => {},
    profiletertiaryeducation: "",
    setProfiletertiaryeducation: () => {},
    profilehometown: "",
    setProfilehometown: () => {},
    profileisupdate:0,
    setprofileisupdate:()=>{}
  });
  
  
export function ProfileContextProvider({ children }: ProfileContextProviderProps) {
  const [profiluserId, setProfileuserid] = useState<string>("");
  const [profilefirstname, setProfilefirstname] = useState<string>("");
  const [profilelastname, setProfilelastname] = useState<string>("");
  const [profileemail, setProfileemail] = useState<string>("");
  const [profilegender, setProfilegender] = useState<string>("");
  const [profiledateofbirth, setProfiledateofbirth] = useState<string>("");
  const [profileplaceofbirth, setProfileplaceofbirth] = useState<string>("");
  const [profileoccupation, setProfileoccupation] = useState<string>("");
  const [profilenationality, setProfilenationality] = useState<string>("");
  const [profilephonenumber, setProfilephonenumber] = useState<string>("");
  const [profilemother, setProfilemother] = useState<string>("");
  const [profilefather, setProfilefather] = useState<string>("");
  const [profilemaritalstatus, setProfilemaritalstatus] = useState<string>("");
  const [profilenumberofchildren, setProfilenumberofchildren] = useState<string>("");
  const [profileprimaryeducation, setProfileprimaryeducation] = useState<string>("");
  const [profilesecondaryeducation, setProfilesecondaryeducation] = useState<string>("");
  const [profiletertiaryeducation, setProfiletertiaryeducation] = useState<string>("");
  const [profilehometown, setProfilehometown] = useState<string>("");
  const [profileisupdate, setprofileisupdate] = useState<number>(0);

  const contextValue: ProfileProp = {
    profiluserId,
    setProfileuserid,
    profilefirstname,
    setProfilefirstname,
    profilelastname,
    setProfilelastname,
    profileemail,
    setProfileemail,
    profilegender,
    setProfilegender,
    profiledateofbirth,
    setProfiledateofbirth,
    profileplaceofbirth,
    setProfileplaceofbirth,
    profileoccupation,
    setProfileoccupation,
    profilenationality,
    setProfilenationality,
    profilephonenumber,
    setProfilephonenumber,
    profilemother,
    setProfilemother,
    profilefather,
    setProfilefather,
    profilemaritalstatus,
    setProfilemaritalstatus,
    profilenumberofchildren,
    setProfilenumberofchildren,
    profileprimaryeducation,
    setProfileprimaryeducation,
    profilesecondaryeducation,
    setProfilesecondaryeducation,
    profiletertiaryeducation,
    setProfiletertiaryeducation,
    profilehometown,
    setProfilehometown,
    profileisupdate, 
    setprofileisupdate
  };

  return (
    <ProfilesContext.Provider value={contextValue}>
      {children}
    </ProfilesContext.Provider>
  );
}
