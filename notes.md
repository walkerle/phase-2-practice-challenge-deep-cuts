# Components Tree

App

  -> TracksPage
    - tracks state here
    - useEffect fetch tracks here
    - handle form submit here
    - search state, and setter state function here
    - handle search state here
    - update tracks array here

    -> Search (pass down search state, handle search state)
    - 

    -> AddTrackForm
    - make all fields controlled (event onChange)
    - submit form and add to rendered tracks (event onSubmit)
    - form state here
    - handle form inputs here
    

    -> TracksList
      .map to render tracks

      -> Track

# Notes
- Struggling with making a controlled input, input fields are not updating...

# Data Shape

{
    "tracks": [
        {
            "id": 1,
            "title": "Givenchy",
            "artist": "Lonely Boy",
            "BPM": 122,
            "image": "https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMTUxMzAyMi9pbWFnZS9rODlZRzAxclh0VXkvY2djZmd4ZmcuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImZpbGwiLCJ3aWR0aCI6MjQwLCJoZWlnaHQiOjI0MH19fQ==?t=1638295080242"
        },